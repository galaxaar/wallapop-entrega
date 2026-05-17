export const buildAuthenticatedSession = (username) => {
    return `
    <a href="/">Inicio</a> 
    <button>⏻</button>
    <span>${username}</span>`
}

export const buildUnauthenticatedSession = () => {
    return `
    <a href="/">Inicio</a>
    <a href="/signup.html">Regístrate</a>
    <a href="/login.html">Inicia Sesión</a>`
}