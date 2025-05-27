import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/dashboard');
  // redirect() is a server-side function, so this component won't render anything.
  // Adding a minimal return to satisfy TypeScript/React, though it's unreachable.
  return null;
}
