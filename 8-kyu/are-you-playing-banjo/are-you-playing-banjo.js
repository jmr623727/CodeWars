function areYouPlayingBanjo(name) {
  // Implement me
  if(name[0].includes('R') || name[0].includes('r')){
    return `${name} plays banjo`;
  }
  else if(!name.includes('R') || !name.includes('r')){
    return `${name} does not play banjo`;
  }
}
console.log(areYouPlayingBanjo('Ragu'))