<template>
  <b-container fluid>
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-primary">
        <li class="breadcrumb-item"><a href="" @click="$router.push({ name: 'dashboard.dashboard' })" class="text-white"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
        <!-- <li class="breadcrumb-item active text-white" aria-current="page">Dashboard</li> -->
      </ol>
    </nav>
    <!-- //breadcrumb -->
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <form novalidate @submit.prevent="handleSubmit(onSubmit)">
        <b-row>
          <b-col lg="12">
            <iq-card>
              <template v-slot:headerTitle>
                <h4 class="card-title">Add Appointment</h4>
              </template>
              <template v-slot:body>
                <b-row align-v="center">
                  <b-col lg="5" class="form-group">
                    <div class="ap-doctor-fields">
                      <b-form-group
                        class="col-sm-12"
                        label-for="exampleFormControlSelect4"
                        label="Hospital:"
                      >
                        <b-form-select
                          plain
                          v-model="user.hospital"
                          :options="hospitals"
                          id="exampleFormControlSelect4"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        class="col-sm-12"
                        label-for="exampleFormControlSelect4"
                        label="Department:"
                      >
                        <b-form-select
                          plain
                          v-model="user.department"
                          :options="departments"
                          id="exampleFormControlSelect4"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        class="col-sm-12"
                        label-for="exampleFormControlSelect4"
                        label="Doctor:"
                      >
                        <b-form-select
                          plain
                          v-model="user.doctor"
                          :options="doctors"
                          id="exampleFormControlSelect4"
                        ></b-form-select>
                      </b-form-group>
                    </div>
                  </b-col>

                  <b-col lg="2" class="form-group">
                    <div class="text-center">OR</div>
                  </b-col>

                  <b-col lg="5" class="form-group">
                    <div class="ap-doctor-fields">
                      <b-form-group class="col-md-12" label="Doctor ID:" label-for="docid">
                        <ValidationProvider name="Doctor ID" rules="required" v-slot="{ errors }">
                          <b-form-input
                            v-model="user.docid"
                            type="text"
                            placeholder="Doctor ID"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"
                          ></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                    </div>
                  </b-col>

                  <b-col lg="12" class="p-0">
                    <b-form-group class="col-sm-12" label="Schedule Appointment:" label-for="doa">
                      <b-form-input type="datetime-local" v-model="user.doa" id="doa"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
                <b-button type="reset" variant="none" class="iq-bg-danger">Reset</b-button>
              </template>
            </iq-card>
          </b-col>
        </b-row>
      </form>
    </ValidationObserver>
  </b-container>
</template>
<script>
import { wellem } from '../../config/pluginInit'

export default {
  name: 'ProfileEdit',
  mounted () {
    wellem.index()
  },
  data () {
    return {
      user: {
        date: '',
        time: '',
        docid: '',
        hospital: '',
        department: '',
        doctor: ''
      },
      hospitals: [
        { value: 'Canada', text: 'Mayo Clinic' },
        { value: 'Niada', text: 'Cleveland Clinic' },
        { value: 'USA', text: 'New York-Presbyterian University Hospital' },
        { value: 'India', text: 'UCSF Medical Center' },
        { value: 'Africa', text: 'Northwestern Memorial Hospital' }
      ],
      departments: [
        { value: 'California', text: 'Emergency' },
        { value: 'Florida', text: 'Cardiology' },
        { value: 'Georgia', text: 'Neurology' },
        { value: 'Georgia', text: 'Oncology' }
      ],
      doctors: [
        { value: 'California', text: 'Harish' },
        { value: 'Florida', text: 'Sandeep' },
        { value: 'Georgia', text: 'Sam' },
        { value: 'Connecticut', text: 'Mohit' }
      ]
    }
  },
  methods: {
    onSubmit () {
      alert('Data submitted!')
    }
  }
}
</script>
