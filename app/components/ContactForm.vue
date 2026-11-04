<template>
  <UCard variant="soft" :ui="{ root: 'divide-y-0', body: 'p-6 sm:p-8' }">
    <h2 class="flex items-center gap-3 text-xl font-semibold text-highlighted">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon name="i-lucide-message-square" class="size-5" aria-hidden="true" />
      </span>
      {{ t('contact.form.title') }}
    </h2>
    <p class="mt-3 text-lg leading-8 text-toned">{{ t('contact.form.description') }}</p>

    <UForm :state="state" :validate="validate" class="mt-6 space-y-5" @submit="onSubmit">
      <div class="grid gap-5 sm:grid-cols-2">
        <UFormField :label="t('contact.form.name')" name="name" required>
          <UInput
            v-model="state.name"
            :placeholder="t('contact.form.namePlaceholder')"
            leading-icon="i-lucide-user"
            autocomplete="name"
            size="lg"
            class="w-full"
          />
        </UFormField>

        <UFormField :label="t('contact.form.email')" name="email" required>
          <UInput
            v-model="state.email"
            type="email"
            :placeholder="t('contact.form.emailPlaceholder')"
            leading-icon="i-lucide-mail"
            autocomplete="email"
            size="lg"
            class="w-full"
          />
        </UFormField>
      </div>

      <UFormField :label="t('contact.form.message')" name="message" required>
        <UTextarea
          v-model="state.message"
          :placeholder="t('contact.form.messagePlaceholder')"
          :rows="6"
          size="lg"
          class="w-full"
        />
      </UFormField>

      <UButton type="submit" icon="i-lucide-send" size="lg">
        {{ t('contact.form.submit') }}
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

type ContactFormState = {
  name: string
  email: string
  message: string
}

const { t } = useI18n()
const { data: contact } = await useContactContent()
const toast = useToast()

const state = reactive<ContactFormState>({
  name: '',
  email: '',
  message: ''
})

function validate(input: Partial<ContactFormState>) {
  const errors: { name: keyof ContactFormState, message: string }[] = []

  if (!input.name?.trim()) {
    errors.push({ name: 'name', message: t('contact.form.errors.name') })
  }

  if (!input.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.push({ name: 'email', message: t('contact.form.errors.email') })
  }

  if (!input.message?.trim()) {
    errors.push({ name: 'message', message: t('contact.form.errors.message') })
  } else if (input.message.trim().length < 10) {
    errors.push({ name: 'message', message: t('contact.form.errors.messageLength') })
  }

  return errors
}

function onSubmit(event: FormSubmitEvent<ContactFormState>) {
  if (!contact.value?.email) {
    toast.add({ title: t('contact.form.missingEmail'), color: 'error' })
    return
  }

  const { name, email, message } = event.data
  const subject = t('contact.form.subject', { name })
  const body = `${message}\n\n${name}\n${email}`

  window.location.href = `mailto:${contact.value.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  toast.add({ title: t('contact.form.opening'), color: 'info' })
}
</script>
