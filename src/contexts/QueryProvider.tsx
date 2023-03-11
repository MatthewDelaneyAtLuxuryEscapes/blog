import React, { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function QueryProvider(props: PropsWithChildren) {
  const { children } = props
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: false,
        staleTime: Infinity,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retryOnMount: false,
        useErrorBoundary: false,
      },
    },
  })

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
