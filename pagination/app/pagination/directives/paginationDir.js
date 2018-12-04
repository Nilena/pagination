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
		paginationdir.inject=[];
		function paginationdir(){

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
					scope.itemsPerPage = 10;
					var datalist= scope.data;
					console.log(datalist);

					scope.numOfPages = function () {
    					return Math.ceil(datalist.length / scope.itemsPerPage);
  					};
  					console.log(scope.numOfPages());
  					
    				scope.$watch('currentPage + numPerPage', function() {
    				var begin = ((scope.currentPage - 1) * scope.itemsPerPage),
   					 end = begin + scope.itemsPerPage;
    
    				scope.newlist= datalist.slice(begin, end);
  });
		}

	}

})();