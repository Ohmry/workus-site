<template>
  <aside class="aside-navigator">
    <nav>
      <ul>
        <li>
          <router-link
            v-for="(menu, index) in menus"
            :key="index"
            :to="menu.uri"
          >
            <button>
              <font-awesome-icon :icon="menu.icon"></font-awesome-icon>
            </button>
            <div class="menu-tooltip">
              {{ menu.label }}
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AsideNavigator',
  props: ['menus']
}
</script>

<style lang="scss" scoped>
aside {
    width: 50px;
    min-width: 50px;
    border-right: 1px solid var(--secondary-color);
    z-index: 99;

    nav {
      padding: 10px 0 0 0;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          a {
            button {
              width: 100%;
              height: 50px;
              border: 0;
              text-align: center;
              outline: none;
              font-size: 18px;
              background-color: transparent;
              color: black;

              &:hover {
                cursor: pointer;
                background-color: #FFCFD6;
              }
            }

            &.router-link-exact-active {
              button {
                background-color: #FFA2B0;
              }
            }

            div.menu-tooltip {
              position: absolute;
              left: 60px;
              background-color: rgba(0, 0, 0, 0.5);
              padding: 10px;
              white-space: nowrap;
              color: white;
              border-radius: 10px;
              margin-top: -45px;
              display: none;
            }
          }
        }
      }
    }
  }
</style>
