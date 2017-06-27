import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  setTip
} from '../../actions'

import {
  getCurrentPayment
} from '../../reducers'

import ConfirmPayment from '../../components/payments/confirm'

const render = props => <ConfirmPayment {...props} />

const mapStateToProps = state => ({
  payment: getCurrentPayment(state)
})

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators({
    onSetTip: e => setTip(e.target.value),
    onStartPayment (e) {
      const { history } = ownProps
      e.preventDefault()
      history.push('/payment/send')
    }
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(render)
