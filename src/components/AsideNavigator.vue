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
              {{ menu.label }}
            </button>
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
    width: 200px;
    min-width: 200px;
    border-right: 1px solid var(--secondary-color);

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
              border: 0;
              padding: 15px 30px;
              text-align: right;
              outline: none;
              background-color: transparent;
              color: #6B6B6B;

              &:hover {
                cursor: pointer;
                background-color: #ffcfd6;
                color: #6B6B6B;
              }
            }

            &.router-link-exact-active {
              button {
                color: white;
                background-color: var(--secondary-color);
              }
            }
          }
        }
      }
    }
  }
</style>
