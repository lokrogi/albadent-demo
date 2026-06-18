export const flowiseConfig = {
  chatflowId: import.meta.env.VITE_FLOWISE_CHATFLOW_ID ?? '',
  apiHost: (import.meta.env.VITE_FLOWISE_API_HOST ?? '').replace(/\/$/, ''),
};

export function isFlowiseConfigured() {
  const { chatflowId, apiHost } = flowiseConfig;
  return (
    Boolean(chatflowId && apiHost) &&
    !chatflowId.includes('uuid-z') &&
    !apiHost.includes('twoj-flowise')
  );
}
