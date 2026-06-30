export type RunbookStep = {
  id: string;
  label: string;
  description: string;
  actionType: string;
  expectedOutcome: string;
};

export type Runbook = {
  id: string;
  title: string;
  description: string;
  steps: RunbookStep[];
};

export const RUNBOOKS: Record<string, Runbook> = {
  "deployment-failure": {
    id: "deployment-failure",
    title: "Deployment Failure Recovery",
    description: "Standard procedure for resolving deployment pipeline crashes.",
    steps: [
      {
        id: "step_1_verify",
        label: "Verify Deployment Hash",
        description: "Check if the deployment commit exists and is healthy.",
        actionType: "MANUAL_VERIFY",
        expectedOutcome: "Commit is confirmed valid.",
      },
      {
        id: "step_2_redeploy",
        label: "Trigger Redeploy",
        description: "Forces a fresh build to clear transient caching issues.",
        actionType: "TRIGGER_REDEPLOY",
        expectedOutcome: "Build succeeds and traffic routes successfully.",
      },
      {
        id: "step_3_slack",
        label: "Notify Slack",
        description: "Alert the team that recovery is underway or completed.",
        actionType: "RETRY_SLACK",
        expectedOutcome: "Slack message is posted to the active channel.",
      }
    ]
  },
  "redis-recovery": {
    id: "redis-recovery",
    title: "Redis Queue Recovery",
    description: "Procedure for resolving worker timeouts caused by Redis instability.",
    steps: [
      {
        id: "step_1_retry",
        label: "Retry Failed Queue Job",
        description: "Pushes the failed job back onto the BullMQ active queue.",
        actionType: "REPLAY_WORKFLOW",
        expectedOutcome: "Job enters PROCESSING state.",
      },
      {
        id: "step_2_verify",
        label: "Verify Worker Health",
        description: "Check if the worker process is actually consuming jobs.",
        actionType: "MANUAL_VERIFY",
        expectedOutcome: "Worker is active and processing.",
      },
      {
        id: "step_3_slack",
        label: "Notify Slack",
        description: "Confirm queue stability to the team.",
        actionType: "RETRY_SLACK",
        expectedOutcome: "Team is notified of resolution.",
      }
    ]
  }
};
