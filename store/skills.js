export const state = () => ({
  selected: []
})

export const mutations = {
  select (state, skill) {
    if (state.selected.indexOf(skill) > 0) {
      return
    }

    state.selected.push(skill)
  },
  unselect (state, skill) {
    if (state.selected.indexOf(skill) === -1) {
      return
    }

    state.selected = state.selected.filter(s => s !== skill)
  }
}
