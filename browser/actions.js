import state from './state'

export function loadSession(){
  fetch('/session')
    .then(response => response.json())
    .then(session => {
      state.set({session})
    })
    .catch(loadSessionError => {
      state.set({loadSessionError})
    })
}
