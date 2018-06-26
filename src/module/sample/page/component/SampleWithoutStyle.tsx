import * as React from 'react'
import { WithStyles, withStyles, Button } from '@material-ui/core'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { TRootState } from 'conf/redux/reducer'

export interface ISampleStateProps {
  dataSampleComponent: string,
}
export interface ISampleConnectedExtendedProps extends RouteComponentProps<void> {
  nameSample: string
}

export interface ISampleDispatchProps {
}
export namespace Sample {
  export interface Props extends ISampleStateProps, ISampleDispatchProps, ISampleConnectedExtendedProps {

  }
  export interface State {
  }
}
class Sample extends React.Component<Sample.Props, Sample.State> {
  state = {

  }
  public render(): JSX.Element {
    return (
      <div>
       <span>Sample</span>
      </div>
  )
  }
}

const mapStateToProps = (state: TRootState, ownProps: ISampleConnectedExtendedProps): ISampleStateProps => ({
  // ...mapStateToProps
  dataSampleComponent: 'Cool',
})

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: ISampleConnectedExtendedProps) => ({
  // ...mapDispatchToProps
})

export default connect(mapStateToProps, mapDispatchToProps)(Sample)