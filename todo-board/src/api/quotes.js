// API pública de frases (sin key)
export async function fetchDailyQuote() {
  const res = await fetch('https://api.quotable.io/random')
  if (!res.ok) {
    throw new Error('No pude traer la frase')
  }
  const data = await res.json()
  return {
    text: data.content,
    author: data.author,
  }
}
