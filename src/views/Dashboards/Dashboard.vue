<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-user-profile-block1">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <img
                  src="../../assets/images/user/08.jpg"
                  alt="profile-img"
                  class="avatar-130 img-fluid"
                />
              </div>
              <div class="text-center mt-3">
                <h4>
                  <b>Varun Gupta</b>
                </h4>
                <p>27 years, India</p>
              </div>
              <ul
                class="doctoe-sedual d-flex align-items-center justify-content-between p-0 mt-4 mb-0"
              >
                <li class="text-center">
                  <h6 class="text-primary">Weight</h6>
                  <h3>
                    67
                    <span>kg</span>
                  </h3>
                </li>
                <li class="text-center">
                  <h6 class="text-primary">Height</h6>
                  <h3>
                    180
                    <span>cm</span>
                  </h3>
                </li>
                <li class="text-center">
                  <h6 class="text-primary">Blood Group</h6>
                  <h3 class="text-warning">AB +</h3>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
        <iq-card body-class="iq-card-body">
          <template v-slot:body>
            <div class="iq-card-header d-flex justify-content-between">
              <div class="iq-header-title">
                <h4 class="card-title">Personal Information</h4>
              </div>
            </div>
            <div class="iq-card-body">
              <div class="about-info m-0 p-0">
                <div class="row">
                  <div class="col-4">Healthcare ID:</div>
                  <h6 class="col-8 text-primary">1234567890</h6>
                  <div class="col-4">Aadhar ID:</div>
                  <div class="col-8">1234567890</div>
                  <div class="col-4">D.O.B:</div>
                  <div class="col-8">01/02/1993</div>
                  <div class="col-4">Sex:</div>
                  <div class="col-8">Male</div>
                  <div class="col-4">Phone:</div>
                  <div class="col-8">
                    <a href="tel:001-2351-25612">+91 9988845547</a>
                  </div>
                  <div class="col-4">Email:</div>
                  <div class="col-8">
                    <a href="mailto:biniJets24@demo.com">varungupta2671@gmail.com</a>
                  </div>
                  <div class="col-4">Address:</div>
                  <div class="col-8">111, XYZ Road</div>
                  <div class="col-4">City:</div>
                  <div class="col-8">Bangalore</div>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card body-class="pb-0">
          <template v-slot:body>
            <b-row>
              <b-col sm="12">
                <iq-card body-class="bg-primary rounded pt-2 pb-2 pr-2">
                  <template v-slot:body>
                    <div class="d-flex align-items-center justify-content-between">
                      <p class="mb-0">Hello!.</p>
                      <div class="rounded iq-card-icon bg-white">
                        <img src="../../assets/images/page-img/37.png" class="img-fluid" alt="icon" />
                      </div>
                    </div>
                  </template>
                </iq-card>
              </b-col>
              <b-col md="12">
                <iq-card
                  body-class="p-0"
                  header-class="d-flex justify-content-between p-0 bg-white"
                >
                  <tab-nav :tabs="true" id="myTab-1">
                    <tab-nav-items
                      :active="true"
                      id="home-tab"
                      aria-controls="home"
                      role="tab"
                      :ariaSelected="true"
                      title="OPR"
                    />
                    <tab-nav-items
                      :active="false"
                      id="profile-tab"
                      aria-controls="profile"
                      role="tab"
                      :ariaSelected="false"
                      title="IPR"
                    />
                  </tab-nav>
                  <tab-content id="myTabContent">
                    <tab-content-item :active="true" id="home" aria-labelled-by="home-tab">
                      <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> -->
                    </tab-content-item>
                    <tab-content-item :active="false" id="profile" aria-labelled-by="profile-tab">
                      <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> -->
                    </tab-content-item>
                  </tab-content>
                </iq-card>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import IqCard from '../../components/wellem/cards/iq-card'
import { wellem } from '../../config/pluginInit'
export default {
  name: 'Dashboard',
  components: { IqCard },
  mounted () {
    wellem.index()
  },
  data () {
    return {
      patientChart: {
        series: [
          {
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31]
          }
        ],
        annotations: {
          points: [
            {
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0'
                },
                text: 'Bananas are good'
              }
            }
          ]
        },
        chart: {
          height: 350,
          type: 'bar'
        },
        colors: ['#089bab'],
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },

        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Servings'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      }
    }
  }
}
</script>
