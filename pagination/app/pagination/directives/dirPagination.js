/**
 * @desc  : pagination  Directive
 * @name  : 'pagination  Directive'
 * @author: Nilena Alexander
 */
 (function () {
        console.log("pagedir");
        'use strict';
        angular
        .module('paginationApp')
        .controller('pageContrl')
        .directive('paginationDir', paginationdir);
        paginationdir.inject=['$timeout'];
        function paginationdir($timeout){

            var directive ={
                link: link,
                templateUrl:"app/pagination/templates/paginationTemplate.html",
                restrict:'EA',
                scope: {
                    data: '='
                }
            };
            return directive;
            function link(scope, element, attrs) {
                 console.log(scope.data);
                    scope.currentPage = 1;
                    scope.maxSize = 5;
                    scope.itemsPerPage =  10;
          scope.numberofpages;
                    scope.subarrayCurrentpage =[];
                    
                    console.log(scope.subarrayCurrentpage);

                    scope.$watch("data" , function() {

                        if(scope.data) {

                            scope.numOfPages = function () {
                                return Math.ceil(scope.data.length / scope.itemsPerPage);
                            };
                            
                        scope.numberofpages = scope.numOfPages();
                            

                  
                            scope.fillPageNumber = function() {
                                scope.subarrayCurrentpage.length = 0;
                                let leastDiff= 2;
                                let mostDiff = 2;
                                if (scope.currentPage- leastDiff<= 0){
                                    leastDiff = Math.abs(scope.currentPage - leastDiff + 1);
                                }

                                if(scope.currentPage + mostDiff >= scope.numberofpages) {
                                    mostDiff = Math.abs(scope.numberofpages - scope.currentPage);
                                }

                                let start = scope.currentPage - leastDiff;
                                let stop = scope.currentPage + mostDiff;


                                for(let i = start; i <=stop; i++) {
                                    scope.subarrayCurrentpage.push(i );
                                }   console.log(scope.subarrayCurrentpage);

                            }
                            scope.fillPageNumber();
                                
                            scope.previous = function (){

                                if(scope.currentPage == 1){

                                    scope.currentPage = scope.numberofpages;
                                    scope.subarrayCurrentpage.length = 0;
                                // scope.currentPage= 6;
                            } else{
                                    scope.currentPage--;
                            }
                        
                            }
                            scope.next = function(){
                                     if(scope.currentPage==scope.numberofpages){
                                        scope.currentPage=1;
                                        scope.subarrayCurrentpage.length = 0;
                                     }
                                    // console.log(scope.subarrayCurrentpage);
                                    else{scope.currentPage++;}
                                    
                            }
                            scope.thisPage = function(id) {
                                console.log("hi");
                  if(scope.currentPage > scope.numberofpages  ){
                         // console.log("hi1");

                        scope.subarrayCurrentpage.length = 0;
                        scope.message = "No such page is available";
                  } 
                   scope.currentPage = id;


                  
                            }
                            scope.$watch('currentPage + itemsPerPage', function() {
                                // scope.subarrayCurrentpage.push(scope.currentPage);
                            
                              var begin = ((scope.currentPage - 1) * scope.itemsPerPage),
                                 end = begin + scope.itemsPerPage;
                                 console.log(scope.currentPage);

                                scope.newlist= scope.data.slice(begin, end);
                scope.numberofpages=  scope.numOfPages();

                                scope.fillPageNumber();
                            });
                        }
                })          

        }

    }

})();