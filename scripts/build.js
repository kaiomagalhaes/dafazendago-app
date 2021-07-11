const fs = require('fs')
const groupBy = require('./utils/groupBy.js')

let page = fs.readFileSync('./index.html').toString()
let data = fs.readFileSync('./scripts/products.json').toString()
data = JSON.parse(data)

let dataByCategory = groupBy(data, 'category');

// Categories selectors
let menuItemTemplate = fs.readFileSync('./scripts/menu-templates/menu-button.html').toString()
let menuButtons = ""
Object.keys(dataByCategory).forEach((category, i) => {
  const reference = category.replace(' ', '-').toLowerCase()
  menuButtons += menuItemTemplate
    .replace('<name />', category)
    .replace('<reference />', reference)
    .replace('<active />', i == 0 ? 'active' : '')
})

page = page.replace('<menu-buttons />', menuButtons)

// Categories

let categoryTemplate = fs.readFileSync('./scripts/menu-templates/category.html').toString()
let itemTemplate = fs.readFileSync('./scripts/menu-templates/item.html').toString()
let categories = ""
Object.keys(dataByCategory).forEach((category, i) => {
  const reference = category.replace(' ', '-').toLowerCase()

  let categoryRef = categoryTemplate
    .replace('<reference />', reference)
    .replace('<active />', i == 0 ? 'active' : '')

  let items = ""

  dataByCategory[category].forEach((item) => {
    items += itemTemplate
      .replace('<image />', item.image || 'img/logo.jpeg')
      .replace('<name />', item.name)
      .replace('<price />', (item.price / 100).toFixed(2))
  })

  categoryRef = categoryRef.replace('<items />', items)
  categories += categoryRef;
})
page = page.replace('<categories />', categories)

// Page update
fs.writeFileSync('./index-update.html', page);
