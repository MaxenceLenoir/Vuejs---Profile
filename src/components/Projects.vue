<template>
<div class="container">
  <h2>{{$t('projects')}}</h2>
  <div class="grid-projects">
    <div v-for="project in projects" :key="project">
      <div class="grid-col-projects">
        <a :href="`${project.url}`" target="_blank" class="without-decoration">
          <div class="card-project">
            <div class="card-project-image" :style="{backgroundImage: `url('${require('../assets/images/' + project.asset_url)}')`}">
            </div>
            <div class="card-project-image-hovered" :style="{backgroundImage: `url('${require('../assets/images/' + project.asset_url)}')`}">
            </div>
            <div class="card-project-content">
              <h4>{{project.name}}</h4>
              <div class="text-align-left">{{$t('projects_detail[' + project.index + '].description')}}</div>
              <ul class="list">
                <li>{{$t('projects_detail[' + project.index + '].skill_one')}}</li>
                <li>{{$t('projects_detail[' + project.index + '].skill_two')}}</li>
                <li>{{$t('projects_detail[' + project.index + '].skill_three')}}</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default ({
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            name: "Resonances",
            url: "https://www.resonances.group/",
            client: "Arnaud Bonnefond",
            asset_url: 'Resonances.png',
            index: 0
          },
          {
            name: "Obras",
            url: "https://ppsps-project.herokuapp.com/",
            client: "Projet Personnel",
            asset_url: 'Obras.png',
            index: 1
          },
          {
            name: "AccessInnPattaya",
            url: "https://www.accessinnpattaya.com/",
            client: "Hotel Access Inn Pattay",
            asset_url: 'AccessInnPattay.png',
            index: 2
          },
          {
            name: "GratteTonChomage",
            url: "http://www.grattetonchomage.fr/",
            client: "projet perso",
            asset_url: 'Grattetonchomage.jpg',
            index: 3
          },
          {
            name: "Homeboard",
            url: " https://mynewhomeboard.herokuapp.com/",
            client: "Projet final du Wagon",
            asset_url: 'Homeboard.jpg',
            index: 4
          },
          {
            name: "Airbnbike",
            url: "https://airbnbikes.herokuapp.com/",
            client: "1er projet du Wagon",
            asset_url: 'AirbnBike.jpg',
            index: 5
          }
        ]
      }
    }
  })
</script>