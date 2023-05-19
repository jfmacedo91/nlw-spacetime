export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a
          target="_blank"
          rel="noopener"
          className="underline transition-colors hover:text-gray-50"
          href="/memories/new"
        >
          criar agora
        </a>
        !
      </p>
    </div>
  )
}
