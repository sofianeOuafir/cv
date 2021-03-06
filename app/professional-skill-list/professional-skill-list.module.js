'use strict';

angular.module('professionalSkillList', ['pascalprecht.translate', 'ngSanitize'])
       .config(function($translateProvider){

        var en = {
          SKILLS:{
            TITLE: 'Professional skills'
          }
        };

        var fr = {
          SKILLS:{
            TITLE: 'Compétences'
          }
        };

       $translateProvider.translations('en', en)
        .translations('fr', fr);

       });

