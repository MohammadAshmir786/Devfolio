export const motionConfig = {
  reducedDuration: 0.01,
  sectionDuration: 0.6,
  childStagger: 0.15,
  childDelay: 0.15,
  panelDelay: 0.3,
  badgeDuration: 0.45,
  badgeStagger: 0.05,
  cardStagger: 0.12,
  loopDuration: 1.8,
  viewport: {
    section: { once: true, amount: 0.25 },
    card: { once: true, amount: 0.2 },
    deep: { once: true, amount: 0.35 },
    subtle: { once: true, amount: 0.4 },
  },
} as const;
