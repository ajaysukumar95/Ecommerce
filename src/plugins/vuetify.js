import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: false,
        themes: {
            light: {
              primary: '#7854F7',
              secondary: '#70C217',
              ternary:'#299EF3',
              accent: '#299EF3',
              error: '#b71c1c',
            },
          }, },
});
