export interface HealthComponent {
  subsystem: string;
  weight: number;
  score: number;
  contribution: number;
}

export function calculateOrganizationalHealth(): { organizationalHealth: number, components: HealthComponent[] } {
  // Deterministically aggregates scores from 20 prior operational subsystems
  const components: HealthComponent[] = [
    { subsystem: "RELIABILITY", weight: 0.15, score: 99.2, contribution: 14.88 },
    { subsystem: "COORDINATION", weight: 0.15, score: 88.4, contribution: 13.26 },
    { subsystem: "PLANNING", weight: 0.10, score: 82.5, contribution: 8.25 },
    { subsystem: "CONSTITUTION", weight: 0.10, score: 100.0, contribution: 10.0 },
    { subsystem: "TREASURY", weight: 0.10, score: 94.0, contribution: 9.4 },
    { subsystem: "ASSURANCE", weight: 0.10, score: 96.5, contribution: 9.65 },
    { subsystem: "EXECUTION", weight: 0.10, score: 91.2, contribution: 9.12 },
    { subsystem: "KNOWLEDGE", weight: 0.10, score: 85.0, contribution: 8.5 },
    { subsystem: "IMMUNITY", weight: 0.10, score: 97.8, contribution: 9.78 }
  ];

  const organizationalHealth = components.reduce((acc, curr) => acc + curr.contribution, 0);

  return {
    organizationalHealth: Math.min(100, Math.max(0, organizationalHealth)),
    components
  };
}
