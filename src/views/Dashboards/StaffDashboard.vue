<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12">
        <b-row>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-primary">
                  <span class="bg-primary" data-percent="70"></span>
                </div>
                <span class="line-height-4">10 feb, 2020</span>
                <h4 class="mb-2 mt-2">1 Ongoing Treatments</h4>
                <p class="mb-0 text-secondary line-height">Reminder</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-danger">
                  <span class="bg-danger" data-percent="50"></span>
                </div>
                <span class="line-height-4">12 Dec, 2020</span>
                <h4 class="mb-2 mt-2">1 Upcoming Treatment</h4>
                <p class="mb-0 text-secondary line-height">Reminder</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
              <template v-slot:body>
                <div class="iq-progress-bar progress-bar-vertical iq-bg-warning">
                  <span class="bg-warning" data-percent="80"></span>
                </div>
                <span class="line-height-4">15 Dec, 2020</span>
                <h4 class="mb-2 mt-2">1 Upcoming Treatment</h4>
                <p class="mb-0 text-secondary line-height">Reminder</p>
              </template>
            </iq-card>
          </b-col>
          <b-col md="6" lg="3">
            <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" nobody>
              <div
                class="iq-card-body p-0 rounded"
                :style="`background: url(${require('../../assets/images/page-img/38.jpg')}) no-repeat scroll center center; background-size: contain;  min-height: 146px;`"
              ></div>
            </iq-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="4">
        <!-- iq-card-stretch iq-card-height iq-user-profile-block -->
        <iq-card class-name="iq-card-block">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <img
                  src="../../assets/images/user/11.png"
                  alt="profile-img"
                  class="avatar-130 img-fluid"
                />
              </div>
              <div class="text-center mt-3">
                <h4>
                  <b>{{ staff.sname | capitalizeEach }}</b>
                </h4>
                <p>{{staff.stype | staff}}</p>
                <p>Neurology Specialist</p>
                <!-- <a href="#" class="btn btn-primary">Assign</a> -->
              </div>
              <hr />
              <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0">
                <li class="text-center">
                  <h3 class="counter">{{staff.yearOfReg | experience}} Yrs</h3>
                  <span>Experience</span>
                </li>
                <li class="text-center">
                  <h3 class="counter">{{staff.qualification}}</h3>
                  <span>Degree</span>
                </li>
              </ul>
            </div>
          </template>
        </iq-card>
        <iq-card body-class="iq-card-body">
          <template v-slot:body>
            <div class="about-info m-0 p-0">
              <div class="row">
                <div class="col-4 info-header">Staff ID:</div>
                <div class="col-8 text-warning">{{staff.sid}}</div>
                <div class="col-4 info-header">Phone:</div>
                <div class="col-8">{{staff.phone}}</div>
                <div class="col-4 info-header">Email:</div>
                <div class="col-8">{{staff.email}}</div>
                <div class="col-4 info-header">Aadhar:</div>
                <div class="col-8">{{staff.aadharid}}</div>
                <div class="col-4 info-header">D.O.B:</div>
                <div class="col-8">{{staff.dob | formatDate}}</div>
                <div class="col-4 info-header">Sex:</div>
                <div class="col-8">{{staff.sex | gender}}</div>
                <div class="col-4 info-header">Certification:</div>
                <div class="col-8">{{staff.regNo}}</div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <!-- iq-card-stretch iq-card-height-half -->
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" nobody>
          <div class="iq-card-body">
            <h3 class="mb-3">Search Patient</h3>
            <div class="iq-search-bar search-user p-0">
              <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(getUserDetails)" class="searchbox mb-3">
                  <ValidationProvider vid="uid" name="Patient Id" rules="required" v-slot="{ errors }">
                    <div class="form-group">
                      <input
                        type="text"
                        class="text search-input"
                        :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                        v-model="patientChar"
                        placeholder="Enter Patient ID here..."
                      />
                      <a class="search-link" href="#">
                        <i class="ri-search-line"></i>
                      </a>
                      <div class="invalid-feedback">
                        <span>{{ errors[0] }}</span>
                      </div>
                    </div>
                  </ValidationProvider>
                </form>
              </ValidationObserver>
              <h6 class="mb-3">Recent Patients:</h6>
              <ul class="doctors-lists m-0 p-0">
              <li
                class="d-flex mb-4 align-items-center"
                v-for="doctor in doctors"
                :key="doctor.name"
              >
                <div class="user-img img-fluid">
                  <img :src="doctor.img" alt="story-img" class="rounded-circle avatar-40" />
                </div>
                <div class="media-support-info ml-3">
                  <h6>{{doctor.name}}</h6>
                  <p class="mb-0 font-size-12">{{doctor.location}}</p>
                </div>
                <div class="iq-card-header-toolbar d-flex align-items-center">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="p-0 text-decoration-none"
                    no-caret
                  >
                    <template v-slot:button-content class="p-0">
                      <span
                        class="dropdown-toggle p-0"
                        id="dropdownMenuButton6"
                        data-toggle="dropdown"
                      >
                        <i class="ri-more-2-line"></i>
                      </span>
                    </template>
                    <b-dropdown-item href="#">
                      <i class="ri-eye-line mr-2"></i>View
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      <i class="ri-bookmark-line mr-2"></i>Appointment
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </li>
            </ul>
            </div>
          </div>
          <!-- <ApexChart element="wave-chart-7" :chartOption="chart7" :isLive="true" /> -->
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="smaill-calender-home"
        >
          <template v-slot:headerTitle>
            <h4 class="card-title">Appointments</h4>
          </template>
          <template v-slot:body>
            <flat-pickr :config="config" value class="d-none" />
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class-name="iq-card-block" iq-card-stretch iq-card-height>
          <template v-slot:headerTitle>
            <h4 class="card-title">Health Curve</h4>
          </template>
          <template v-slot:body>
            <ApexChart element="home-chart-06" :chartOption="darkChart1" v-if="$route.meta.dark" />
            <ApexChart element="home-chart-06" :chartOption="chart1" v-else />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
            <h6>TOTAL APPOINTMENTS</h6>
            <h3>
              <b>100</b>
            </h3>
          </div>
          <ApexChart element="wave-chart-7" :chartOption="chart7" :isLive="true" />
        </iq-card>
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
            <h6>NEW PATIENTS</h6>
            <h3>
              <b>2</b>
            </h3>
          </div>
          <ApexChart element="wave-chart-8" :chartOption="chart8" :isLive="true" />
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import IqCard from '../../components/wellem/cards/iq-card'
import { wellem, customMethods } from '../../config/pluginInit'
import { constant } from '../../config/constant'
import AuthServices from './../../services/auth'
import userServices from './../../services/user'

export default {
  name: 'Dashboard',
  components: { IqCard },
  mounted () {
    if (
      constant.authDToken === '' ||
      constant.authDToken === undefined ||
      constant.authDToken === null
    ) {
      this.$router.push({ name: 'staff.sign-in' })
    }
    this.getStaffData()
    wellem.index()
  },
  methods: {
    getStaffData () {
      AuthServices.checkAuth('d')
        .then(response => {
          if (response) {
            this.staff = response.data
            localStorage.setItem('userName', response.data.sname)
            constant.userName = response.data.sname
          }
        })
        .catch(error => {
          // console.log('err', error)
          customMethods.resetUserState('d', false, constant, this)
        })
    },

    getUserDetails () {
      userServices.searchPatient('d', this.patientChar)
        .then(response => {
          if (response) {
            // console.log(response.data)
            this.patientData = response.data.data
            this.$router.push({
              name: 'default.patient-details',
              params: { uid: this.patientData.hid, patient: this.patientData },
              replace: true })
          }
        })
        .catch(error => {
          // console.log('err', error)
          customMethods.resetUserState('d', false, constant, this)
        })
    }
  },
  data () {
    return {
      patientChar: '',
      patientData: {},
      staff: {
        name: '',
        age: '',
        experience: ''
      },
      records: {
        consultation: 1,
        lab: 1,
        receipt: 1,
        summary: 1
      },
      config: {
        dateFormat: 'Y-m-d',
        inline: true
      },
      doctors: [
        {
          name: 'Paul Molive',
          img: require('../../assets/images/user/01.jpg'),
          location: 'Punjab, India'
        },
        {
          name: 'Barb Dwyer',
          img: require('../../assets/images/user/02.jpg'),
          location: 'Patna, India'
        },
        {
          name: 'Terry Aki',
          img: require('../../assets/images/user/03.jpg'),
          location: 'Punjab, India'
        },
        {
          name: 'Robin Banks',
          img: require('../../assets/images/user/04.jpg'),
          location: 'Punjab, India'
        },
        {
          name: 'Barry Wine',
          img: require('../../assets/images/user/05.jpg'),
          location: 'Patna, India'
        },
        {
          name: 'Zack Lee',
          img: require('../../assets/images/user/06.jpg'),
          location: 'Patna, India'
        },
        {
          name: 'Otto Matic',
          img: require('../../assets/images/user/07.jpg'),
          location: 'Punjab, India'
        },
        {
          name: 'Moe Fugga',
          img: require('../../assets/images/user/08.jpg'),
          location: 'Patna, India'
        },
        {
          name: 'Bud Wiser',
          img: require('../../assets/images/user/09.jpg'),
          location: 'Patna, India'
        },
        {
          name: 'Barry Cade',
          img: require('../../assets/images/user/10.jpg'),
          location: 'Punjab, India'
        }
      ],
      appointments: [
        {
          patient: 'Petey Cruiser',
          doctor: 'Dr.Monty Carlo',
          date: '20/02/2020',
          timing: '8:00 AM',
          contact: '+1-202-555-0146'
        },
        {
          patient: 'Anna Sthesia',
          doctor: 'Dr.Pete Sariya',
          date: '25/02/2020',
          timing: '8:30 AM',
          contact: '+1-202-555-0164'
        },
        {
          patient: 'Paul Molive',
          doctor: 'Dr.Brock Lee',
          date: '20/02/2020',
          timing: '9:45 AM',
          contact: '+1-202-555-0153'
        },
        {
          patient: 'Anna Mull',
          doctor: 'Dr.Barb Ackue',
          date: '27/02/2020',
          timing: '11:30 AM',
          contact: '+1-202-555-0154'
        },
        {
          patient: 'Paige Turner',
          doctor: 'Dr.Walter Melon',
          date: '28/02/2020',
          timing: '3:30 AM',
          contact: '+1-202-555-0101'
        },
        {
          patient: 'Don Stairs',
          doctor: 'Dr.Arty Ficial',
          date: '28/02/2020',
          timing: '4:30 PM',
          contact: '+1-202-555-0176'
        },
        {
          patient: 'Pat Agonia',
          doctor: 'Dr.Barb Ackue',
          date: '29/02/2020',
          timing: '5:00 AM',
          contact: '+1-202-555-0194'
        }
      ],
      chart1: {
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }
        ],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#089bab'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      darkChart1: {
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }
        ],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#089bab'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart7: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            data: []
          }
        ],
        colors: ['#089bab'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      chart8: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000
            }
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            data: []
          }
        ],
        colors: ['#fc9f5b'],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          labels: {
            minWidth: 34
          },
          max: 100
        },
        legend: {
          show: false
        }
      },
      radialChat: {
        type: 'radial-pie',
        height: 280,
        data: [
          {
            country: 'USA',
            value: 401
          },
          {
            country: 'India',
            value: 300
          },
          {
            country: 'Australia',
            value: 200
          },
          {
            country: 'Brazil',
            value: 100
          }
        ]
      }
    }
  }
}
</script>
