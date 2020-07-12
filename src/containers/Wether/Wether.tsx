import React, { Component, Dispatch, Fragment } from "react";
import { connect } from "react-redux";
import { wetherRequest } from "./actions";
import { ApplicationState } from "../../store";
import { RootWether, WetherParams } from "./types";
import { Input } from "antd";
import Icon from "@ant-design/icons";
import LocationSvg from "../../components/LocationSvg/LocationSvg";

const { Search } = Input;

interface PropsFromState {
  loading: boolean;
  wether: RootWether;
  errors: {};
}

interface PropsDispatchFromState {
  onWether: typeof wetherRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  searchQuery: string;
}

const LocationIcon = (props: any) => (
  <Icon component={LocationSvg} {...props} />
);

class Wether extends Component<AllProps, State> {
  state: State = {
    searchQuery: "",
  };

  componentDidMount() {
    const data: WetherParams = {
      city: "london",
      appId: "181c39376b587a994a7e22b312ea93fc",
    };
    this.props.onWether(data);
  }

  search = (values: string) => {
    this.setState({ searchQuery: values }, () => {
      const data: WetherParams = {
        city: values,
        appId: "181c39376b587a994a7e22b312ea93fc",
      };
      this.props.onWether(data);
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <Search
            placeholder="Search by City"
            onSearch={value => this.search(value)}
            style={{ width: "100%" }}
            prefix={
              <LocationIcon
                style={{
                  fontSize: 12,
                  color: "#1890ff",
                }}
              />
            }
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ wether }: ApplicationState) => ({
  loading: wether.loading,
  wether:wether.wether,
  errors: wether.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onWether: (params: WetherParams) => dispatch(wetherRequest(params)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Wether);
