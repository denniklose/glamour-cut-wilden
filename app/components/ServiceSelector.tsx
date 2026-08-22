"use client";

import { useEffect, useId, useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  copy: string;
};

type ServiceSelectorProps = {
  services: Service[];
  bookingHref: string;
  bookingLabel: string;
};

export default function ServiceSelector({ services, bookingHref, bookingLabel }: ServiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxId = useId();
  const labelId = useId();
  const selectedService = selectedIndex === null ? null : services[selectedIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const closeAndReturnFocus = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const openMenu = (index = selectedIndex ?? 0) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const selectService = (index: number) => {
    setSelectedIndex(index);
    closeAndReturnFocus();
  };

  return (
    <div className="service-selector" ref={rootRef}>
      <p className="service-selector-label" id={labelId}>Was interessiert Sie?</p>
      <div className="service-selector-control">
        <button
          ref={triggerRef}
          className="service-selector-trigger"
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-autocomplete="none"
          aria-labelledby={labelId}
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={isOpen ? `${listboxId}-option-${activeIndex}` : undefined}
          onClick={() => {
            if (isOpen) setIsOpen(false);
            else openMenu();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              if (isOpen) setActiveIndex((index) => (index + 1) % services.length);
              else openMenu(selectedIndex ?? 0);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              if (isOpen) setActiveIndex((index) => (index - 1 + services.length) % services.length);
              else openMenu(selectedIndex ?? services.length - 1);
            } else if (event.key === "Home" && isOpen) {
              event.preventDefault();
              setActiveIndex(0);
            } else if (event.key === "End" && isOpen) {
              event.preventDefault();
              setActiveIndex(services.length - 1);
            } else if ((event.key === "Enter" || event.key === " ") && isOpen) {
              event.preventDefault();
              selectService(activeIndex);
            } else if (event.key === "Escape" && isOpen) {
              event.preventDefault();
              closeAndReturnFocus();
            }
          }}
        >
          <span>{selectedService?.title ?? "Leistung auswählen"}</span>
          <span className="service-selector-arrow" aria-hidden="true">↓</span>
        </button>

        <div className="service-selector-popover" data-open={isOpen ? "true" : "false"}>
          <div className="service-selector-options" id={listboxId} role="listbox" aria-label="Leistung auswählen">
            {services.map((service, index) => (
              <button
                key={service.number}
                id={`${listboxId}-option-${index}`}
                className="service-selector-option"
                type="button"
                role="option"
                aria-selected={selectedIndex === index}
                data-active={activeIndex === index ? "true" : "false"}
                tabIndex={-1}
                onClick={() => selectService(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{service.number}</span>
                <strong>{service.title}</strong>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedService ? (
        <article className="service-selector-result" key={selectedService.number} aria-live="polite">
          <span className="service-selector-number">{selectedService.number}</span>
          <div>
            <p className="section-kicker">Ausgewählte Leistung</p>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.copy}</p>
            <a className="text-link" href={bookingHref}>{bookingLabel} <span aria-hidden="true">→</span></a>
          </div>
        </article>
      ) : null}
    </div>
  );
}
