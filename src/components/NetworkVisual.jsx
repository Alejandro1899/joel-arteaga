import React from "react";

function NetworkVisual() {
  return (
    <div className="network">
      <div className="network-grid" />

      <div className="connection connection-one" />
      <div className="connection connection-two" />
      <div className="connection connection-three" />
      <div className="connection connection-four" />

      <div className="node node-center">
        <span>CORE</span>
      </div>

      <div className="node node-software">
        <span>SOFTWARE</span>
      </div>

      <div className="node node-network">
        <span>NETWORK</span>
      </div>

      <div className="node node-infra">
        <span>INFRA</span>
      </div>

      <div className="node node-security">
        <span>SECURITY</span>
      </div>

      <div className="network-status">
        SYSTEM / ONLINE
      </div>
    </div>
  );
}
export default NetworkVisual;