import Button from '@components/Button/Button'

export default function Home() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button>Click me</Button>
      <Button $primary>Primary Button</Button>
      <p>This is the home page.</p>
    </div>
  );
}