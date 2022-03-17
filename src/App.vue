<template>
  <div id="app">
      <h1>Pesquisa de Desenvolvedores</h1>

      <div class="header">

        <div> 
            <label for="name"> Por Nome:</label>
            <input class="search" id="name" placeholder="Digite aqui"/>
        </div>

            <div class="filter">
                <div class="option">
                    <label>Por linguagem:</label>
                    <input type="radio" name="option" value="e">E
                    <input type="radio" name="option" value="ou">Ou
                </div>

                <div class="languages">
                    <div>
                        <input type="checkbox" name="languages" value="java">java
                        <input type="checkbox" name="languages" value="javascript">javascript
                    </div>

                    <div>
                        <input type="checkbox" name="languages" value="php">PHP
                        <input type="checkbox" name="languages" value="python">Python
                    </div>
                </div>
            </div>
      </div>

      <div>
          <h4 v-text="devs.length + ' resultados'"/>
      </div>

      <div class="list">
          <div class="card" v-for="dev in devs" :key="dev.key">
              <div class="userImage">
                  <img :src="dev.picture"/>
              </div>

              <div class="info">
                  <h4 class="name"    v-text="dev.name"/>
                  <span class="age"     v-text="dev.age + ' anos'"/>
                  <span class="email"   v-text="dev.email"/>

                  <div> 
                      <img class="languagesIcon" v-for="lang in dev.programmingLanguages" :key="lang.key" :src="imgLang[lang.id]">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  data () {
      return {
            devs: [],
            imgLang: {
                'JavaScript': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png',
                'Python': 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com001.jpg',
                'Java': 'https://img.ibxk.com.br/materias/7204960/56172.jpg',
                'Php': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
            }
      }
  },

  created() {
    axios.get('https://bernardosantos.zeedhi.com/workfolder/dev.php').then((Response) => {
        this.devs = Response.data.devs
        console.log(devs)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}

label {
  font: bold;
}

.header {
    display: grid;
    grid-template-columns: 70% 30% ;
}

.filter {
    display: grid;
    grid-template-columns: 30% 70%;

}

.options {
    display: block;
}

.languages {
    display: inline-block;
}

.card {
  width: 550px;
  display: grid;
  grid-template-columns: 25% 75%;
}

.languagesIcon {
    width: 30px;
    height: 30px;
}
</style>
