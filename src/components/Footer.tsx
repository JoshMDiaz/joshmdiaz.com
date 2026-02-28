const Footer = () => {
  return (
    <footer className="border-t border-border/40 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Josh Diaz. All rights reserved.
        </p>
        <div className="flex gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <a
            href="https://www.linkedin.com/in/joshdiaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/JoshMDiaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
