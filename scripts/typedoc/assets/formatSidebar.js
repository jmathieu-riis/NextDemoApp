function main() {
  var sidebarNavItemsSelector = '.tsd-navigation ul li.tsd-kind-module';
  var sidebarNavItems = document.querySelectorAll(sidebarNavItemsSelector);
  sidebarNavItems.forEach((item) => {
    const itemLink = item.querySelector('a');
    if (itemLink.innerText.includes('/') && !itemLink.innerText.includes('node_modules')) {
      item.className = 'tsd-kind-module indented-list-item';
    }
  });
}

main();