'use strict';

const app = angular.module('viewApp', [
  'ui.router',
  'viewServices',
  'viewComponents'
]);

app.run(($transitions, $rootScope) => {

  $transitions.onStart({}, (trans) => {
    console.log('onStart ' + trans._targetState._identifier);
    $rootScope.$emit('LOADING', true);
    trans.promise.finally(() => $rootScope.$emit('LOADING', false));
  });

  $transitions.onError({}, (trans) => {
    console.log('onError ' + trans._targetState._identifier);
  });
  $transitions.onSuccess({}, (trans) => {
    console.log('onSuccess ' + trans._targetState._identifier);
  });
  $transitions.onBefore({}, (trans) => {
    console.log('onBefore ' + trans._targetState._identifier);
  });
  $transitions.onEnter({}, (trans) => {
    console.log('onEnter ' + trans._targetState._identifier);
  });
  $transitions.onRetain({}, (trans) => {
    console.log('onRetain ' + trans._targetState._identifier);
  });
  $transitions.onFinish({}, (trans) => {
    console.log('onFinish ' + trans._targetState._identifier);
  });
  $transitions.onExit({}, (trans) => {
    console.log('onExit ' + trans._targetState._identifier);
  });

});