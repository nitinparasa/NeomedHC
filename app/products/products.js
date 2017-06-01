'use strict';

angular.module('NHCApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProdCtrl'
  }).
  when('/products/:productType',{
    templateUrl: 'products/prodthumb.html',
    controller: 'ProdThumbCtrl'
  });
}])

.controller('ProdCtrl', ['$scope',function($scope) {
    $scope.products = [
      {sno:"1",name:"AXYFLAM PLUS",form:"Tablet",active_ingredient:"Aceclofenac 100mg + Paracetamol 325mg",packof:"10*10 Strips"},
      {sno:"2",name:"AXYFLAM SP",form:"Tablet ",active_ingredient:"Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg ",packof:"10*10 Strips"},
      {sno:"3",name:"C-DOXIM 100D/SYP 30ml",form:"Dry Syrup",active_ingredient:"Cefpodoxime 100mg Dry Suspension",packof:"1 Bottle"},
      {sno:"4",name:"C-DOXIM 100DT",form:"Tablet",active_ingredient:"Cefpodoxime 100mg DT",packof:"10*10 Strips"},
      {sno:"5",name:"C-DOXIM 100D/SYP 60ml",form:"Dry Syrup",active_ingredient:"Cefpodoxime 100mg Dry Suspension",packof:"1 Bottle"},
      {sno:"6",name:"C-DOXIM 200",form:"Tablet",active_ingredient:"Cefpodoxime 200mg",packof:"10*10 Strips"},
      {sno:"7",name:"C-DOXIM 50 Dt",form:"Tablet",active_ingredient:"Cefpodoxime 50 DT",packof:"10*10 Strips"},
      {sno:"8",name:"C-DOXIM 50mg 30ml D/SYP",form:"Dry Syrup",active_ingredient:"Cefpodoxime 50mg Dry Suspension",packof:"1 Bottle"},
      {sno:"9",name:"C-DOXIM CV 200",form:"Tablet",active_ingredient:"Cefpodoxime 200 + Clavulanate 125mg ",packof:"10*10 Strips"},
      {sno:"10",name:"DAY FIT",form:"Tablet",active_ingredient:"Lycopene with Antioxidants, mineral, vitamin",packof:"10*10 Strips"},
      {sno:"11",name:"EXCLAV 1.2 GM",form:"Injection",active_ingredient:"Amoxicillin 1gm + Clavulanic acid 125mg",packof:"1 vial"},
      {sno:"12",name:"FEROBATE",form:"Tablet",active_ingredient:"Ferrous Ascorbate 100mg + Folic acid 1.5mg ",packof:"10*10 Strips"},
      {sno:"13",name:"McBOL Forte Injs",form:"Injection",active_ingredient:"Methylcobalamin 1000mcg + Pyridoxine 100mg + Nicotinamide 100mg + D-Pantheno l50mg + Benzyl Alcohol i.p 2% Injs",packof:"1 vial"},
      {sno:"14",name:"McBOL FORTE",form:"Capsule",active_ingredient:"Mecobolamine 1500mcg + Folic acid 1.5mg + Alpha Lipoic acid 100mg + Thiamine 10mg + Vit B1,B6",packof:"10*10 Strips"},
      {sno:"15",name:"MEDMIK 100mg",form:"Injection",active_ingredient:"Amikacin 100mg",packof:"1 vial"},
      {sno:"16",name:"MEDMIK 500mg",form:"Injection",active_ingredient:"Amikacin 500mg",packof:"1 vial"},
      {sno:"17",name:"MEDTRAP TABS",form:"Tablet",active_ingredient:"Tramadol 37.5mg + Paracetamol 325mg",packof:"10*10 Strips"},
      {sno:"18",name:"MEDTRAX 1GM",form:"Injection",active_ingredient:"Ceftriaxone 1gm + Wfi 10ml injs",packof:"1 vial"},
      {sno:"19",name:"MEDTRAX TZ 1GM",form:"Injection",active_ingredient:"Ceftriaxone 1gm + Tazobactam 125mg",packof:"1 vial"},
      {sno:"20",name:"MEDTRAX TZ 250mg",form:"Injection",active_ingredient:"Ceftriaxone 250mg + Tazobactam 31.25mg",packof:"1 vial"},
      {sno:"21",name:"MOBIDIC 1ml",form:"Injection",active_ingredient:"Diclofenac 75mg/1ml amps of 5 amps",packof:"1 Ampoule"},
      {sno:"22",name:"NEOPENEM S",form:"Injection",active_ingredient:"Meropenem 1gm  + Sulbactam 500mg",packof:"1 vial"},
      {sno:"23",name:"NEOPENEM 1G",form:"Injection",active_ingredient:"Meropenem 1gm",packof:"1 vial (Tray pack)"},
      {sno:"24",name:"NEOPENEM 500mg",form:"Injection",active_ingredient:"Meropenem 500mg",packof:"1 vial (Tray pack)"},
      {sno:"25",name:"NEOPIME 1g",form:"Injection",active_ingredient:"Cefepime 1gm + Wfi 10ml",packof:"1 vial"},
      {sno:"26",name:"NEOPPI 4Omg",form:"Tablet",active_ingredient:"Pantaprozole 4omg  enteric coated",packof:"10*10 Strips"},
      {sno:"27",name:"NEOPPI DSR",form:"Tablet",active_ingredient:" Pantaprozole 40mg + Domperidone 10mg SR",packof:"10*10 Strips"},
      {sno:"28",name:"NEOPPI-IV",form:"Injection",active_ingredient:"Pantaprozole 40mg INJS ( Lyophilized form )",packof:"1 vial"},
      {sno:"29",name:"On-Domed 2ml",form:"Injection",active_ingredient:"Ondonsetran 4mg",packof:"1 Ampoule"},
      {sno:"30",name:"TAZOMED 1.125g",form:"Injection",active_ingredient:"Piperacillin 1gm + Tazobactam 125mg",packof:"1 vial"},
      {sno:"31",name:"TAZOMED 2.25g",form:"Injection",active_ingredient:"Piperacillin 2gm + Tazobactam 250mg",packof:"1 vial"},
      {sno:"32",name:"TAZOMED 4.5g",form:"Injection",active_ingredient:"Piperacillin 4gm + Tazobactam 500mg",packof:"1 vial"},
      ];
      $scope.limit=10;
      $scope.loadMore = function(){
        $scope.limit = $scope.limit + 10;
      };
      $scope.loadLess = function(){
        $scope.limit = $scope.limit - 10;
      };
}])

.controller('ProdThumbCtrl',['$scope','$routeParams',function($scope,$routeParams){
  $scope.prodType=$routeParams.productType;
}]);
