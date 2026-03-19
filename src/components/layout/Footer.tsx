export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-8 mt-16 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fabián Fernández.
      </p>
    </footer>
  );
}
