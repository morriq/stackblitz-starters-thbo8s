'use client';

import { FormProvider } from '../providers/Form';
import { RuntimeVariablesProvider } from '../providers/RuntimeVariables';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <FormProvider>
          <RuntimeVariablesProvider>{children}</RuntimeVariablesProvider>
        </FormProvider>
      </body>
    </html>
  );
}
