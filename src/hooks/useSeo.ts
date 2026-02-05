
export function defineSEO({ title, description }: {title: string, description: string}) {
  document.title = title

  const meta = document.querySelector("meta[name='description']")
  if (meta) meta.setAttribute("content", description)
}
