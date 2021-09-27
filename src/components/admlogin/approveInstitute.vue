<template>
<div>
<admHeader />
      <b-container>
        <p class="display-4 text-primary mt-5 mx-5">APPROVE INSTITUTE</p>
       <table class="table table-striped table-bordered border-primary table-hover text-center">
            <thead class="table-dark">
                <tr>
                    <th>College ID</th>
                    <th>College Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.collegeId}}</td>
                    <td>{{user.collegeName}}</td>
                    <td>{{user.status}}</td>
                </tr>
            </tbody>
        </table>
      </b-container>
<Footer />
</div>    
</template>

<script>
import admHeader from './admHeader'
import Footer from '../Footer'

export default {
    name : 'approveInstitute',
    prop : {
      msg : String   
    },
    components : {
      admHeader,
      Footer
    },
    data() {
        return {
            users: [
                { collegeId: '9123', collegeName: 'SACS MAVMM Engineering College', status: 'Approved' },
                { collegeId: '9427', collegeName: 'Pandiyan saraswathi Enginnering College', status: 'Processing' },
                { collegeId: '9543', collegeName: 'Latha Mathavan Engineering college', status: 'Initialising' }
            ]
        };
    }
};
</script>
