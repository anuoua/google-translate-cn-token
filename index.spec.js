import { getToken } from './index'
import { expect } from 'chai'

describe('request test', () => {
    it('request test 1', done => {
        Promise
            .race([
                getToken('Hello'),
                getToken('Hello', 'cn')
            ])
            .then(res => {
                console.log(res)
                done()
            })
            .catch(err => done(err))
    })
})