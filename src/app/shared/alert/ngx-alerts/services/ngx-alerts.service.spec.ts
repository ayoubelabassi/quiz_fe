/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { NgxAlertsService } from './ngx-alerts.service'

import { Promise } from 'bluebird'
import { SnotifyService } from './../../ngx-snotify'

describe('Service: Form, Angular Tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAlertsService, SnotifyService],
    })
  })

  it(
    'should inject the service instance',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      expect(service).toBeTruthy()
    })
  )

  it(
    'should run the alertSuccess method',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      const successCb = () => Promise.resolve()
      const closeCb = () => Promise.reject()

      const spy = spyOn(service, 'alertSuccess')
      const options = {
        title: 'text-title',
        text: 'text-text',
      }
      return service.alertSuccess(options, successCb, closeCb)
    })
  )

  it(
    'should run the notifySuccess method',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      const spy = spyOn(service, 'notifySuccess')
      service.notifySuccess({ body: 'test' })
      expect(spy.calls.count()).toBe(
        1,
        `expected service search method to be called once but was called ${spy.calls.count()} times`
      )
    })
  )

  it(
    'should run the notifyInfo method',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      const spy = spyOn(service, 'notifyInfo')
      service.notifyInfo({ body: 'test' })
      expect(spy.calls.count()).toBe(
        1,
        `expected service search method to be called once but was called ${spy.calls.count()} times`
      )
    })
  )

  it(
    'should run the notifyWarning method',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      const spy = spyOn(service, 'notifyWarning')
      service.notifyWarning({ body: 'test' })
      expect(spy.calls.count()).toBe(
        1,
        `expected service search method to be called once but was called ${spy.calls.count()} times`
      )
    })
  )

  it(
    'should run the notifyError method',
    inject([NgxAlertsService], (service: NgxAlertsService) => {
      const spy = spyOn(service, 'notifyError')
      service.notifyError({ body: 'test' })
      expect(spy.calls.count()).toBe(
        1,
        `expected service search method to be called once but was called ${spy.calls.count()} times`
      )
    })
  )
})
