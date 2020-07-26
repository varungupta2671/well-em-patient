<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" nobody>
          <div class="iq-card-body">
            <h3 class="mb-3">Search Staff</h3>
            <div class="iq-search-bar search-user p-0">
              <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(getUserDetails)" class="searchbox mb-3">
                  <ValidationProvider
                    vid="uid"
                    name="Staff Id"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="text search-input"
                        :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                        v-model="patientChar"
                        placeholder="Enter Staff ID here..."
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
              <h6 class="mb-3">All Staff List:</h6>
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
                    <p class="mb-0 font-size-12">{{doctor.speciality}} ({{doctor.degree}})</p>
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
        <!-- iq-card-stretch iq-card-height-half -->
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height" nobody>
          <div class="iq-card-body">
            <h3 class="mb-3">Search Patient</h3>
            <div class="iq-search-bar search-user p-0">
              <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(getUserDetails)" class="searchbox mb-3">
                  <ValidationProvider
                    vid="uid"
                    name="Patient Id"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        class="text search-input"
                        :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                        v-model="staffChar"
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
              <h6 class="mb-3">All Patients:</h6>
              <ul class="doctors-lists m-0 p-0">
                <li
                  class="d-flex mb-4 align-items-center"
                  v-for="patient in patients"
                  :key="patient.name"
                >
                  <div class="user-img img-fluid">
                    <img :src="patient.img" alt="story-img" class="rounded-circle avatar-40" />
                  </div>
                  <div class="media-support-info ml-3">
                    <h6>{{patient.name}}</h6>
                    <p class="mb-0 font-size-12">{{patient.location}}</p>
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
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
            <h6>TOTAL STAFF</h6>
            <h3>
              <b>{{ doctors.length }}</b>
            </h3>
          </div>
          <ApexChart element="wave-chart-7" :chartOption="chart7" :isLive="true" />
        </iq-card>
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height-half" nobody>
          <div class="iq-card-body">
            <h6>TOTAL PATIENTS ({{new Date() | formatDate}})</h6>
            <h3>
              <b>{{ patients.length }}</b>
            </h3>
          </div>
          <ApexChart element="wave-chart-8" :chartOption="chart8" :isLive="true" />
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="smaill-calender-home"
        >
          <template v-slot:headerTitle>
            <h4 class="card-title">Emergency Ward Bookings</h4>
          </template>
          <template v-slot:body>
            <flat-pickr :config="config" value class="d-none" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card body-class="pb-0" class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Bookings:</h4>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col lg="12">
                    <!-- // Bookings data here -->
                    <b-row>
                      <b-col md="12">
                        <iq-card
                          class-name="iq-card-block iq-card-stretch iq-card-height"
                          body-class="iq-bg-primary rounded"
                        >
                          <template v-slot:body>
                            <div
                              class="d-flex align-items-center justify-content-between"
                              @click="$router.push({ name: 'default.add-appointment' })"
                            >
                              <div class="rounded-circle iq-card-icon bg-white">
                                <i class="ri-user-fill"></i>
                              </div>
                              <div class="text-right">
                                <h4 class="d-modal-link">Book New Appointment</h4>
                              </div>
                            </div>
                          </template>
                        </iq-card>
                      </b-col>
                      <b-col md="12">
                        <iq-card
                          class-name="iq-card-block iq-card-stretch iq-card-height"
                          body-class="iq-bg-primary rounded"
                        >
                          <template v-slot:body>
                            <div
                              class="d-flex align-items-center justify-content-between"
                              @click="$router.push({ name: 'default.lab-test-booking' })"
                            >
                              <div class="rounded-circle iq-card-icon bg-white">
                                <i class="ri-women-fill"></i>
                              </div>
                              <div class="text-right">
                                <h4 class="d-modal-link">Book New Lab Test</h4>
                              </div>
                            </div>
                          </template>
                        </iq-card>
                      </b-col>
                      <b-col md="12">
                        <iq-card
                          class-name="iq-card-block iq-card-stretch iq-card-height"
                          body-class="iq-bg-primary rounded"
                        >
                          <template v-slot:body>
                            <div
                              class="d-flex align-items-center justify-content-between"
                              @click="$router.push({ name: 'default.lab-test-booking' })"
                            >
                              <div class="rounded-circle iq-card-icon bg-white">
                                <i class="ri-women-fill"></i>
                              </div>
                              <div class="text-right">
                                <h4 class="d-modal-link">Prepare Bills</h4>
                              </div>
                            </div>
                          </template>
                        </iq-card>
                      </b-col>
                    </b-row>
                    <!-- // Bookings data ends here -->
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
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
      constant.authHToken === '' ||
      constant.authHToken === undefined ||
      constant.authHToken === null
    ) {
      this.$router.push({ name: 'hospital.sign-in' })
    }
    this.getStaffData()
    wellem.index()
  },
  methods: {
    getStaffData () {
      AuthServices.checkAuth('h')
        .then(response => {
          if (response) {
            this.staff = response.data
            localStorage.setItem('userName', response.data.hname)
            constant.userName = response.data.sname
          }
        })
        .catch(error => {
          // console.log('err', error)
          customMethods.resetUserState('d', false, constant, this)
        })
    },

    getUserDetails () {
      userServices
        .searchPatient('h', this.patientChar)
        .then(response => {
          if (response) {
            // console.log(response.data)
            this.patientData = response.data.data
            this.$router.push({
              name: 'default.patient-details',
              params: { uid: this.patientData.hid, patient: this.patientData },
              replace: true
            })
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
      staffChar: '',
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
      patients: [
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
      doctors: [
        {
          name: 'Dr. Paul Molive',
          img: require('../../assets/images/user/01.jpg'),
          speciality: 'Cardiologists',
          degree: 'MBBS, MD'
        },
        {
          name: 'Dr. Barb Dwyer',
          img: require('../../assets/images/user/02.jpg'),
          speciality: 'Neurologist',
          degree: 'MD'
        },
        {
          name: 'Dr. Terry Aki',
          img: require('../../assets/images/user/03.jpg'),
          speciality: 'Anesthesiologists',
          degree: 'MBBS'
        },
        {
          name: 'Dr. Robin Banks',
          img: require('../../assets/images/user/04.jpg'),
          speciality: 'Gastroenterologists',
          degree: 'MBBS, MD'
        },
        {
          name: 'Dr. Barry Wine',
          img: require('../../assets/images/user/05.jpg'),
          speciality: 'Emergency Medicine Specialists',
          degree: 'BAMS'
        },
        {
          name: 'Dr. Zack Lee',
          img: require('../../assets/images/user/06.jpg'),
          speciality: 'Dermatologists',
          degree: 'MS, MD'
        },
        {
          name: 'Dr. Otto Matic',
          img: require('../../assets/images/user/07.jpg'),
          speciality: 'Endocrinologists',
          degree: 'MBBS, MD'
        },
        {
          name: 'Dr. Moe Fugga',
          img: require('../../assets/images/user/08.jpg'),
          speciality: 'Cardiologists',
          degree: 'MD'
        },
        {
          name: 'Dr. Bud Wiser',
          img: require('../../assets/images/user/09.jpg'),
          speciality: 'Dermatologists',
          degree: 'MBBS'
        },
        {
          name: 'Dr. Barry Cade',
          img: require('../../assets/images/user/10.jpg'),
          speciality: 'Neurologist',
          degree: 'MBBS, MD'
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
