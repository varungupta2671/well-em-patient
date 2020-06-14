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
                <h4 class="card-title">Book a Lab Test</h4>
              </template>
              <template v-slot:body>
                <b-row align-v="center">
                  <b-form-group
                    class="col-lg-6 col-sm-12"
                    label-for="exampleFormControlSelect4"
                    label="Search For Nearest Lab:"
                  >
                    <b-form-select
                      plain
                      v-model="user.lab"
                      :options="labs"
                      id="exampleFormControlSelect4"
                    ></b-form-select>
                  </b-form-group>
                </b-row>
                <b-row align-v="center">
                  <b-form-group
                    class="col-lg-6 col-sm-12"
                    label-for="exampleFormControlSelect4"
                    label="Select Test:"
                  >
                    <b-form-select
                      plain
                      v-model="user.test"
                      :options="tests"
                      id="exampleFormControlSelect4"
                    ></b-form-select>

                    <span class="add-more-test float-right"><i class="ri-add-line"></i>Add More Test</span>
                  </b-form-group>
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
        lab: '',
        test: ''
      },
      labs: [
        { value: 'Canada', text: 'Mayo Clinic' },
        { value: 'Niada', text: 'Cleveland Clinic' },
        { value: 'USA', text: 'New York-Presbyterian University Hospital' },
        { value: 'India', text: 'UCSF Medical Center' },
        { value: 'Africa', text: 'Northwestern Memorial Hospital' }
      ],
      tests: [
        { value: 'California', text: 'Emergency' },
        { value: 'Florida', text: 'Cardiology' },
        { value: 'Georgia', text: 'Neurology' },
        { value: 'Georgia', text: 'Oncology' }
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
