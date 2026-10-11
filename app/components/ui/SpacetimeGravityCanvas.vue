<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  gridSize?: number
  gravityRadius?: number
  gravityStrength?: number
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: 32,
  gravityRadius: 260,
  gravityStrength: 52,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null

// Mouse tracker state with smooth dampening
const mouse = {
  x: -9999,
  y: -9999,
  targetX: -9999,
  targetY: -9999,
  active: false,
  targetActive: false,
  currentRadius: 0,
}

// Background cosmic dust particles
interface Star {
  x: number
  y: number
  size: number
  alpha: number
  phase: number
}
let stars: Star[] = []

function initStars(width: number, height: number) {
  const count = Math.floor((width * height) / 16000)
  stars = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.6,
      alpha: Math.random() * 0.45 + 0.2,
      phase: Math.random() * Math.PI * 2,
    })
  }
}

function updateMousePosition(clientX: number, clientY: number) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top

  // Check if cursor is roughly within or near the canvas
  if (
    x >= -100 &&
    x <= rect.width + 100 &&
    y >= -100 &&
    y <= rect.height + 100
  ) {
    mouse.targetX = x
    mouse.targetY = y
    mouse.targetActive = true
  } else {
    mouse.targetActive = false
  }
}

function handleMouseMove(e: MouseEvent) {
  updateMousePosition(e.clientX, e.clientY)
}

function handleMouseLeave(e: MouseEvent) {
  // If moving out of the document/window
  if (!e.relatedTarget && !e.toElement) {
    mouse.targetActive = false
  }
}

function handleTouchMove(e: TouchEvent) {
  if (!e.touches[0]) return
  updateMousePosition(e.touches[0].clientX, e.touches[0].clientY)
}

function handleTouchEnd() {
  mouse.targetActive = false
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let dpr = 1

  function resize() {
    if (!canvas) return
    const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height
    dpr = Math.min(window.devicePixelRatio || 1, 2)

    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    ctx!.scale(dpr, dpr)
    initStars(width, height)
  }

  window.addEventListener('resize', resize)
  resize()

  // Track globally on window so hovering buttons, text or cards also bends spacetime!
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  document.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('touchmove', handleTouchMove, { passive: true })
  window.addEventListener('touchend', handleTouchEnd)

  let time = 0

  function render() {
    if (!ctx) return
    time += 0.015

    // Smooth cursor interpolation
    if (mouse.targetActive) {
      if (mouse.x < -1000) {
        mouse.x = mouse.targetX
        mouse.y = mouse.targetY
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15
        mouse.y += (mouse.targetY - mouse.y) * 0.15
      }
      mouse.currentRadius += (props.gravityRadius - mouse.currentRadius) * 0.1
    } else {
      mouse.currentRadius += (0 - mouse.currentRadius) * 0.06
    }

    ctx.clearRect(0, 0, width, height)

    // Check dark mode
    const isDark = document.documentElement.classList.contains('dark')

    // 1. Draw subtle ambient stars / particles
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i]
      const alpha = s.alpha * (0.6 + 0.4 * Math.sin(time * 2 + s.phase))
      ctx.fillStyle = isDark
        ? `rgba(205, 214, 244, ${alpha * 0.65})`
        : `rgba(92, 95, 119, ${alpha * 0.35})`
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      ctx.fill()
    }

    // 2. Compute Spacetime Grid with Gravitational Well Distortion
    const step = props.gridSize
    const cols = Math.ceil(width / step) + 2
    const rows = Math.ceil(height / step) + 2

    const effectiveRadius = mouse.currentRadius
    const strength = props.gravityStrength

    // Precalculate displaced vertices
    const grid: { x: number; y: number; disp: number }[][] = []

    for (let r = 0; r <= rows; r++) {
      grid[r] = []
      const origY = (r - 1) * step
      for (let c = 0; c <= cols; c++) {
        const origX = (c - 1) * step

        let dx = origX - mouse.x
        let dy = origY - mouse.y
        const dist = Math.hypot(dx, dy)

        let finalX = origX
        let finalY = origY
        let displacement = 0

        if (effectiveRadius > 0 && dist < effectiveRadius && dist > 0.1) {
          // General relativity gravitational pull:
          // pulling the space mesh inwards towards the mass center
          const normDist = dist / effectiveRadius
          // Smooth falloff curve
          const factor = Math.pow(1 - normDist * normDist, 2)
          displacement = factor * strength

          // Inward vector
          finalX -= (dx / dist) * displacement
          finalY -= (dy / dist) * displacement
        }

        grid[r][c] = { x: finalX, y: finalY, disp: displacement }
      }
    }

    // Colors
    const baseLineColor = isDark
      ? 'rgba(205, 214, 244, 0.07)'
      : 'rgba(92, 95, 119, 0.08)'

    const accentPrimaryColor = isDark
      ? 'rgba(137, 180, 250, 0.75)' // Mocha Blue vibrant
      : 'rgba(30, 102, 245, 0.75)' // Latte Blue

    // Draw horizontal lines
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath()
      for (let c = 0; c <= cols; c++) {
        const pt = grid[r][c]
        if (c === 0) {
          ctx.moveTo(pt.x, pt.y)
        } else {
          ctx.lineTo(pt.x, pt.y)
        }
      }
      ctx.strokeStyle = baseLineColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw vertical lines
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath()
      for (let r = 0; r <= rows; r++) {
        const pt = grid[r][c]
        if (r === 0) {
          ctx.moveTo(pt.x, pt.y)
        } else {
          ctx.lineTo(pt.x, pt.y)
        }
      }
      ctx.strokeStyle = baseLineColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // 4. Highlight distorted lines near gravitational center
    if (effectiveRadius > 4) {
      // Horizontal distorted segments
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pt1 = grid[r][c]
          const pt2 = grid[r][c + 1]
          const maxDisp = Math.max(pt1.disp, pt2.disp)
          if (maxDisp > 0.8) {
            const intensity = Math.min(1, maxDisp / (strength * 0.7))
            ctx.beginPath()
            ctx.moveTo(pt1.x, pt1.y)
            ctx.lineTo(pt2.x, pt2.y)
            ctx.strokeStyle = isDark
              ? `rgba(137, 180, 250, ${0.15 + 0.65 * intensity})`
              : `rgba(30, 102, 245, ${0.15 + 0.65 * intensity})`
            ctx.lineWidth = 1 + 1.2 * intensity
            ctx.stroke()
          }
        }
      }

      // Vertical distorted segments
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r < rows; r++) {
          const pt1 = grid[r][c]
          const pt2 = grid[r + 1][c]
          const maxDisp = Math.max(pt1.disp, pt2.disp)
          if (maxDisp > 0.8) {
            const intensity = Math.min(1, maxDisp / (strength * 0.7))
            ctx.beginPath()
            ctx.moveTo(pt1.x, pt1.y)
            ctx.lineTo(pt2.x, pt2.y)
            ctx.strokeStyle = isDark
              ? `rgba(137, 180, 250, ${0.15 + 0.65 * intensity})`
              : `rgba(30, 102, 245, ${0.15 + 0.65 * intensity})`
            ctx.lineWidth = 1 + 1.2 * intensity
            ctx.stroke()
          }
        }
      }

      // 5. Gravitational singularity / core glow & event horizon
      const coreGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        effectiveRadius
      )
      if (isDark) {
        coreGrad.addColorStop(0, 'rgba(137, 180, 250, 0.28)')
        coreGrad.addColorStop(0.35, 'rgba(180, 190, 254, 0.12)')
        coreGrad.addColorStop(0.7, 'rgba(203, 166, 247, 0.04)')
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      } else {
        coreGrad.addColorStop(0, 'rgba(30, 102, 245, 0.20)')
        coreGrad.addColorStop(0.4, 'rgba(114, 135, 253, 0.08)')
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      }

      ctx.fillStyle = coreGrad
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, effectiveRadius, 0, Math.PI * 2)
      ctx.fill()

      // Center focal singularity rings
      const ringAlpha = Math.min(1, effectiveRadius / props.gravityRadius)
      
      // Halo exterior
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 22, 0, Math.PI * 2)
      ctx.strokeStyle = isDark
        ? `rgba(180, 190, 254, ${0.25 * ringAlpha})`
        : `rgba(114, 135, 253, ${0.25 * ringAlpha})`
      ctx.lineWidth = 1
      ctx.stroke()

      // Event horizon orbit ring
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 11, 0, Math.PI * 2)
      ctx.strokeStyle = accentPrimaryColor
      ctx.lineWidth = 1.6
      ctx.stroke()

      // Core point
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = accentPrimaryColor
      ctx.fill()
    }

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
  })
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden select-none">
    <canvas
      ref="canvasRef"
      class="block h-full w-full opacity-90 transition-opacity duration-700"
    />
  </div>
</template>
