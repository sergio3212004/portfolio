"use client";

import React, { useState } from "react";
import Section from "./Section";
import Card from "./Card";
import Button from "./Button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export interface ContactSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    directContact: string;
    email: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ dict }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section
      id="contact"
      tag={dict.tag}
      title={dict.title}
      subtitle={dict.subtitle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-4">
          <Card>
            <span className="text-xs font-mono uppercase tracking-widest text-hb-600 dark:text-hb-400 font-semibold block mb-2">
              {dict.directContact}
            </span>
            <a
              href={`mailto:${dict.email}`}
              className="text-lg sm:text-xl font-bold text-dsg-950 dark:text-[#edf3f5] hover:text-hb-500 dark:hover:text-hb-400 transition-colors block mb-4 font-mono"
            >
              {dict.email}
            </a>
            <p className="text-xs text-dsg-600 dark:text-dsg-400 leading-relaxed">
              Available for full-time engineering roles, freelance software architecture, and consulting.
            </p>
          </Card>

          <Card className="flex items-center justify-between">
            <span className="text-xs font-mono text-dsg-500 dark:text-dsg-400 uppercase tracking-wider">
              Social Channels
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dsg-700 dark:text-dsg-300 hover:text-hb-500 dark:hover:text-hb-400 transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dsg-700 dark:text-dsg-300 hover:text-hb-500 dark:hover:text-hb-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </Card>
        </div>

        {/* Right Side: Sober Minimalist Form */}
        <div className="lg:col-span-7">
          <Card>
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircleIcon className="w-10 h-10 text-hb-500" />
                <h4 className="text-base font-bold text-dsg-950 dark:text-[#edf3f5]">
                  Message Received
                </h4>
                <p className="text-xs text-dsg-600 dark:text-dsg-400 max-w-sm font-mono">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono uppercase tracking-wider text-dsg-600 dark:text-dsg-400 mb-1.5"
                    >
                      {dict.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={dict.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-md bg-dsg-50 dark:bg-[#0c1215] border border-dsg-300 dark:border-[#1e2c33] text-dsg-950 dark:text-[#edf3f5] placeholder:text-dsg-400 dark:placeholder:text-dsg-600 focus:outline-none focus:border-hb-500 transition-colors text-xs font-mono"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono uppercase tracking-wider text-dsg-600 dark:text-dsg-400 mb-1.5"
                    >
                      {dict.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={dict.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-md bg-dsg-50 dark:bg-[#0c1215] border border-dsg-300 dark:border-[#1e2c33] text-dsg-950 dark:text-[#edf3f5] placeholder:text-dsg-400 dark:placeholder:text-dsg-600 focus:outline-none focus:border-hb-500 transition-colors text-xs font-mono"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-wider text-dsg-600 dark:text-dsg-400 mb-1.5"
                  >
                    {dict.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={dict.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-md bg-dsg-50 dark:bg-[#0c1215] border border-dsg-300 dark:border-[#1e2c33] text-dsg-950 dark:text-[#edf3f5] placeholder:text-dsg-400 dark:placeholder:text-dsg-600 focus:outline-none focus:border-hb-500 transition-colors text-xs font-mono resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md">
                    {dict.submit}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
