

<script>

import Field from "./Field.vue"
import axios from 'axios'

export default {
    props: {
        uuid: String,
        version: String,
        name: String,
        description: String,
        submitLabel: String,
        fields: Array
    },
    components: {
        'Field': Field
    },
    created: () => {
        
    },
    methods: {
        onChange: function() {
            
            var data = {}

            this.fields.forEach(function(field, index) { 
               data.emailAddress = 'test@test.com'
               data.name = 'hello'
            })

            console.log(data)
            
            axios.post(
                'https://kbiiehch10.execute-api.us-east-1.amazonaws.com/stage/v1/data', 
                JSON.stringify({ 
                    "operations": [
                        { 
                            "op": "create",
                            "type": "user:1.0.0",
                            "data": data
                        }
                    ]
                }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                alert(response);
            })
            .catch(function (error) {
                alert(error);
            });

        }
    }
    /*
    computed: {
        fields: function() { 
            let mockFieldsData = {
                uuid: "create-deployment",
                fields: [
                    {
                        uuid: 'user:1.0.0',
                        type: 'text',
                        name: "emailAddress",
                        label: "Email Address",
                        value: null,
                        is_disabled: false,
                        options: [],
                        validation_rules: [{
                            name: 'Length',
                            required: true,
                            min_length: 3,
                            max_length: 100,
                            pattern: null
                        }]
                    },
                    {
                        uuid: 'user:1.0.0',
                        type: 'text',
                        name: 'name',
                        label: 'Name',
                        value: null,
                        is_disabled: false,
                        options: [],
                        validation_rules: [{
                            name: 'Length',
                            required: true,
                            min_length: 3,
                            max_length: 100,
                            pattern: null
                        }]
                    }
                ]
            }
            return mockFieldsData.fields
        }
        
        fields: function() {
            let mockFieldsData = {
                uuid: 'create-deployable',
                version: 1,
                fields: [
                    {
                        uuid: 'deployment-name',
                        version: 1,
                        type: 'text',
                        label: 'Name',
                        value: null,
                        is_disabled: false,
                        options: [],
                        validation_rules: [{
                            name: 'Length',
                            required: true,
                            min_length: 3,
                            max_length: 100,
                            pattern: null
                        }]
                    },
                    {
                        uuid: 'deployment-type',
                        version: 1,
                        type: 'select',
                        label: 'Type',
                        value: null,
                        is_disabled: false,
                        options: [
                            { value: 'aws', display_name: 'AWS', is_selected: true },
                            { value: 'azure', display_name: 'Azure', is_selected: false },
                            { value: 'docker', display_name: 'Docker', is_selected: false },
                            { value: 'gcp', display_name: 'GCP', is_selected: false },
                            { value: 'jenkins', display_name: 'Jenkins', is_selected: false },
                            { value: 'kubernetes', display_name: 'Kubernetes', is_selected: false },
                            { value: 'terraform', display_name: 'Terraform', is_selected: false },
                            { value: 'other', display_name: 'Other', is_selected: false }
                        ],
                        validation_rules: []
                    }
                ]
            };
            return mockFieldsData.fields;
        }
        
        
    },
    */
}
</script> 


<template>
    <div class="form">
        <div class="form-body">
            <div class="form-fields">
                <a @click="onChange()">Click me to trigger change.</a>
                <div v-for="field in fields">
                    <field :field="field"></field>
                </div>
            </div>
        </div>
    </div>
</template>