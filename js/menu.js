const layer = new Layer()

getMenu()
function getMenu () {
  $.ajax({
    url: './source/menu.json',
    dataType: 'json',
    success: function (data) {
      initLeft(data)/* 菜单第一栏 */
      initMiddle(data)/* 菜单第二栏 */
      initRight(data)/* 菜单第三栏 */
    },
    error: function (err) {
      console.log(err)
    }
  })
}

/* 菜单第一栏 */
function initLeft (data) {
  const $pageTabs = $('.primaryPageTab')
  const pageUl = $('<ul class="pageTab"></ul>')
  $.each(data.pageTab, (index, ele) => {
    const $item = new layer.createPageTab(ele)
    pageUl.append($item)
  })
  $pageTabs.append(pageUl)
}

/* 菜单第二栏 */
function initMiddle (data) {
  const $channelMenu = $('.primaryChannelMenu')
  $.each(data.menu, (index, ele) => {
    let $item = null
    if (index < (data.menu.length - 1)) {
      $item = new layer.createMenu(ele)
    } else {
      $item = new layer.createMenuBottom(ele)
    }
    $channelMenu.append($item)
  })
}

/* 菜单第三栏 */
function initRight (data) {
  const $friendship = $('.primaryFriendshipLink')
  const shipUl = $('<ul class="shipLink"></ul>')
  $.each(data.friendship, (index, ele) => {
    const $item = new layer.createFriendShip(ele)
    shipUl.append($item)
  })
  $friendship.append(shipUl)
}

