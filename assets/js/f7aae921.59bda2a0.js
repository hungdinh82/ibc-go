"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[524],{89472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=i(85893),s=i(11151);const o={title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/overview"},c="Overview",a={id:"ibc/overview",title:"Overview",description:"Learn about IBC, its components, and IBC use cases.",source:"@site/versioned_docs/version-v4.6.x/01-ibc/01-overview.md",sourceDirName:"01-ibc",slug:"/ibc/overview",permalink:"/v4/ibc/overview",draft:!1,unlisted:!1,tags:[],version:"v4.6.x",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",sidebar_position:1,slug:"/ibc/overview"},sidebar:"defaultSidebar",previous:{title:"intro",permalink:"/v4/"},next:{title:"Integration",permalink:"/v4/ibc/integration"}},r={},h=[{value:"What is the Inter-Blockchain Communication Protocol (IBC)?",id:"what-is-the-inter-blockchain-communication-protocol-ibc",level:2},{value:"Components Overview",id:"components-overview",level:2},{value:"Clients",id:"clients",level:3},{value:"IBC Client Heights",id:"ibc-client-heights",level:3},{value:"Connections",id:"connections",level:3},{value:"Proofs and Paths",id:"proofs-and-paths",level:3},{value:"Capabilities",id:"capabilities",level:3},{value:"Ports",id:"ports",level:3},{value:"Channels",id:"channels",level:3},{value:"Closing channels",id:"closing-channels",level:4},{value:"Packets",id:"packets",level:3},{value:"Receipts and Timeouts",id:"receipts-and-timeouts",level:3},{value:"Acknowledgments",id:"acknowledgments",level:3},{value:"Further Readings and Specs",id:"further-readings-and-specs",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,t.jsx)(n.p,{children:"Learn about IBC, its components, and IBC use cases."})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-the-inter-blockchain-communication-protocol-ibc",children:"What is the Inter-Blockchain Communication Protocol (IBC)?"}),"\n",(0,t.jsx)(n.p,{children:"This document serves as a guide for developers who want to write their own Inter-Blockchain\nCommunication protocol (IBC) applications for custom use cases."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"IBC applications must be written as self-contained modules."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Due to the modular design of the IBC protocol, IBC\napplication developers do not need to be concerned with the low-level details of clients,\nconnections, and proof verification."}),"\n",(0,t.jsxs)(n.p,{children:["This brief explanation of the lower levels of the\nstack gives application developers a broad understanding of the IBC\nprotocol. Abstraction layer details for channels and ports are most relevant for application developers and describe how to define custom packets and ",(0,t.jsx)(n.code,{children:"IBCModule"})," callbacks."]}),"\n",(0,t.jsx)(n.p,{children:"The requirements to have your module interact over IBC are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bind to a port or ports."}),"\n",(0,t.jsx)(n.li,{children:"Define your packet data."}),"\n",(0,t.jsx)(n.li,{children:"Use the default acknowledgment struct provided by core IBC or optionally define a custom acknowledgment struct."}),"\n",(0,t.jsx)(n.li,{children:"Standardize an encoding of the packet data."}),"\n",(0,t.jsxs)(n.li,{children:["Implement the ",(0,t.jsx)(n.code,{children:"IBCModule"})," interface."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Read on for a detailed explanation of how to write a self-contained IBC application module."}),"\n",(0,t.jsx)(n.h2,{id:"components-overview",children:"Components Overview"}),"\n",(0,t.jsx)(n.h3,{id:"clients",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client",children:"Clients"})}),"\n",(0,t.jsxs)(n.p,{children:["IBC clients are on-chain light clients. Each light client is identified by a unique client-id.\nIBC clients track the consensus states of other blockchains, along with the proof spec necessary to\nproperly verify proofs against the client's consensus state. A client can be associated with any number\nof connections to the counterparty chain. The client identifier is auto generated using the client type\nand the global client counter appended in the format: ",(0,t.jsx)(n.code,{children:"{client-type}-{N}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"ClientState"})," should contain chain specific and light client specific information necessary for verifying updates\nand upgrades to the IBC client. The ",(0,t.jsx)(n.code,{children:"ClientState"})," may contain information such as chain-id, latest height, proof specs,\nunbonding periods or the status of the light client. The ",(0,t.jsx)(n.code,{children:"ClientState"})," should not contain information that\nis specific to a given block at a certain height, this is the function of the ",(0,t.jsx)(n.code,{children:"ConsensusState"}),". Each ",(0,t.jsx)(n.code,{children:"ConsensusState"}),"\nshould be associated with a unique block and should be referenced using a height. IBC clients are given a\nclient identifier prefixed store to store their associated client state and consensus states along with\nany metadata associated with the consensus states. Consensus states are stored using their associated height."]}),"\n",(0,t.jsx)(n.p,{children:"The supported IBC clients are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine",children:"Solo Machine light client"}),": Devices such as phones, browsers, or laptops."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint",children:"Tendermint light client"}),": The default for Cosmos SDK-based chains."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/09-localhost",children:"Localhost (loopback) client"}),": Useful for\ntesting, simulation, and relaying packets to modules on the same application."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ibc-client-heights",children:"IBC Client Heights"}),"\n",(0,t.jsx)(n.p,{children:"IBC Client Heights are represented by the struct:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Height struct {\n   RevisionNumber uint64\n   RevisionHeight uint64\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"RevisionNumber"})," represents the revision of the chain that the height is representing.\nA revision typically represents a continuous, monotonically increasing range of block-heights.\nThe ",(0,t.jsx)(n.code,{children:"RevisionHeight"})," represents the height of the chain within the given revision."]}),"\n",(0,t.jsxs)(n.p,{children:["On any reset of the ",(0,t.jsx)(n.code,{children:"RevisionHeight"}),"\u2014for example, when hard-forking a Tendermint chain\u2014\nthe ",(0,t.jsx)(n.code,{children:"RevisionNumber"})," will get incremented. This allows IBC clients to distinguish between a\nblock-height ",(0,t.jsx)(n.code,{children:"n"})," of a previous revision of the chain (at revision ",(0,t.jsx)(n.code,{children:"p"}),") and block-height ",(0,t.jsx)(n.code,{children:"n"})," of the current\nrevision of the chain (at revision ",(0,t.jsx)(n.code,{children:"e"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Height"}),"s that share the same revision number can be compared by simply comparing their respective ",(0,t.jsx)(n.code,{children:"RevisionHeight"}),"s.\n",(0,t.jsx)(n.code,{children:"Height"}),"s that do not share the same revision number will only be compared using their respective ",(0,t.jsx)(n.code,{children:"RevisionNumber"}),"s.\nThus a height ",(0,t.jsx)(n.code,{children:"h"})," with revision number ",(0,t.jsx)(n.code,{children:"e+1"})," will always be greater than a height ",(0,t.jsx)(n.code,{children:"g"})," with revision number ",(0,t.jsx)(n.code,{children:"e"}),",\n",(0,t.jsx)(n.strong,{children:"REGARDLESS"})," of the difference in revision heights."]}),"\n",(0,t.jsx)(n.p,{children:"Ex:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"Height{RevisionNumber: 3, RevisionHeight: 0} > Height{RevisionNumber: 2, RevisionHeight: 100000000000}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When a Tendermint chain is running a particular revision, relayers can simply submit headers and proofs with the revision number\ngiven by the chain's ",(0,t.jsx)(n.code,{children:"chainID"}),", and the revision height given by the Tendermint block height. When a chain updates using a hard-fork\nand resets its block-height, it is responsible for updating its ",(0,t.jsx)(n.code,{children:"chainID"})," to increment the revision number.\nIBC Tendermint clients then verifies the revision number against their ",(0,t.jsx)(n.code,{children:"chainID"})," and treat the ",(0,t.jsx)(n.code,{children:"RevisionHeight"})," as the Tendermint block-height."]}),"\n",(0,t.jsxs)(n.p,{children:["Tendermint chains wishing to use revisions to maintain persistent IBC connections even across height-resetting upgrades must format their ",(0,t.jsx)(n.code,{children:"chainID"}),"s\nin the following manner: ",(0,t.jsx)(n.code,{children:"{chainID}-{revision_number}"}),". On any height-resetting upgrade, the ",(0,t.jsx)(n.code,{children:"chainID"})," ",(0,t.jsx)(n.strong,{children:"MUST"})," be updated with a higher revision number\nthan the previous value."]}),"\n",(0,t.jsx)(n.p,{children:"Ex:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before upgrade ",(0,t.jsx)(n.code,{children:"chainID"}),": ",(0,t.jsx)(n.code,{children:"gaiamainnet-3"})]}),"\n",(0,t.jsxs)(n.li,{children:["After upgrade ",(0,t.jsx)(n.code,{children:"chainID"}),": ",(0,t.jsx)(n.code,{children:"gaiamainnet-4"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Clients that do not require revisions, such as the solo-machine client, simply hardcode ",(0,t.jsx)(n.code,{children:"0"})," into the revision number whenever they\nneed to return an IBC height when implementing IBC interfaces and use the ",(0,t.jsx)(n.code,{children:"RevisionHeight"})," exclusively."]}),"\n",(0,t.jsxs)(n.p,{children:["Other client-types can implement their own logic to verify the IBC heights that relayers provide in their ",(0,t.jsx)(n.code,{children:"Update"}),", ",(0,t.jsx)(n.code,{children:"Misbehavior"}),", and\n",(0,t.jsx)(n.code,{children:"Verify"})," functions respectively."]}),"\n",(0,t.jsxs)(n.p,{children:["The IBC interfaces expect an ",(0,t.jsx)(n.code,{children:"ibcexported.Height"})," interface, however all clients must use the concrete implementation provided in\n",(0,t.jsx)(n.code,{children:"02-client/types"})," and reproduced above."]}),"\n",(0,t.jsx)(n.h3,{id:"connections",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/03-connection",children:"Connections"})}),"\n",(0,t.jsxs)(n.p,{children:["Connections encapsulate two ",(0,t.jsx)(n.code,{children:"ConnectionEnd"})," objects on two separate blockchains. Each\n",(0,t.jsx)(n.code,{children:"ConnectionEnd"})," is associated with a client of the other blockchain (for example, the counterparty blockchain).\nThe connection handshake is responsible for verifying that the light clients on each chain are\ncorrect for their respective counterparties. Connections, once established, are responsible for\nfacilitating all cross-chain verifications of IBC state. A connection can be associated with any\nnumber of channels."]}),"\n",(0,t.jsxs)(n.h3,{id:"proofs-and-paths",children:[(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment",children:"Proofs"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/24-host",children:"Paths"})]}),"\n",(0,t.jsx)(n.p,{children:"In IBC, blockchains do not directly pass messages to each other over the network. Instead, to\ncommunicate, a blockchain commits some state to a specifically defined path that is reserved for a\nspecific message type and a specific counterparty. For example, for storing a specific connectionEnd as part\nof a handshake or a packet intended to be relayed to a module on the counterparty chain. A relayer\nprocess monitors for updates to these paths and relays messages by submitting the data stored\nunder the path and a proof to the counterparty chain."}),"\n",(0,t.jsx)(n.p,{children:"Proofs are passed from core IBC to light-clients as bytes. It is up to light client implementation to interpret these bytes appropriately."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The paths that all IBC implementations must use for committing IBC messages is defined in\n",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-024-host-requirements",children:"ICS-24 Host State Machine Requirements"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The proof format that all implementations must be able to produce and verify is defined in ",(0,t.jsx)(n.a,{href:"https://github.com/confio/ics23",children:"ICS-23 Proofs"})," implementation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"capabilities",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/advanced/10-ocap.md",children:"Capabilities"})}),"\n",(0,t.jsx)(n.p,{children:"IBC is intended to work in execution environments where modules do not necessarily trust each\nother. Thus, IBC must authenticate module actions on ports and channels so that only modules with the\nappropriate permissions can use them."}),"\n",(0,t.jsxs)(n.p,{children:["This module authentication is accomplished using a ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-003-dynamic-capability-store.md",children:"dynamic\ncapability store"}),". Upon binding to a port or\ncreating a channel for a module, IBC returns a dynamic capability that the module must claim in\norder to use that port or channel. The dynamic capability module prevents other modules from using that port or channel since\nthey do not own the appropriate capability."]}),"\n",(0,t.jsxs)(n.p,{children:["While this background information is useful, IBC modules do not need to interact at all with\nthese lower-level abstractions. The relevant abstraction layer for IBC application developers is\nthat of channels and ports. IBC applications must be written as self-contained ",(0,t.jsx)(n.strong,{children:"modules"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A module on one blockchain can communicate with other modules on other blockchains by sending,\nreceiving, and acknowledging packets through channels that are uniquely identified by the\n",(0,t.jsx)(n.code,{children:"(channelID, portID)"})," tuple."]}),"\n",(0,t.jsxs)(n.p,{children:["A useful analogy is to consider IBC modules as internet applications on\na computer. A channel can then be conceptualized as an IP connection, with the IBC portID being\nanalogous to an IP port and the IBC channelID being analogous to an IP address. Thus, a single\ninstance of an IBC module can communicate on the same port with any number of other modules and\nIBC correctly routes all packets to the relevant module using the (channelID, portID tuple). An\nIBC module can also communicate with another IBC module over multiple ports, with each\n",(0,t.jsx)(n.code,{children:"(portID<->portID)"})," packet stream being sent on a different unique channel."]}),"\n",(0,t.jsx)(n.h3,{id:"ports",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/05-port",children:"Ports"})}),"\n",(0,t.jsxs)(n.p,{children:["An IBC module can bind to any number of ports. Each port must be identified by a unique ",(0,t.jsx)(n.code,{children:"portID"}),".\nSince IBC is designed to be secure with mutually distrusted modules operating on the same ledger,\nbinding a port returns a dynamic object capability. In order to take action on a particular port\n(for example, an open channel with its portID), a module must provide the dynamic object capability to the IBC\nhandler. This requirement prevents a malicious module from opening channels with ports it does not own. Thus,\nIBC modules are responsible for claiming the capability that is returned on ",(0,t.jsx)(n.code,{children:"BindPort"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"channels",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",children:"Channels"})}),"\n",(0,t.jsx)(n.p,{children:"An IBC channel can be established between two IBC ports. Currently, a port is exclusively owned by a\nsingle module. IBC packets are sent over channels. Just as IP packets contain the destination IP\naddress and IP port, and the source IP address and source IP port, IBC packets contain\nthe destination portID and channelID, and the source portID and channelID. This packet structure enables IBC to\ncorrectly route packets to the destination module while allowing modules receiving packets to\nknow the sender module."}),"\n",(0,t.jsxs)(n.p,{children:["A channel can be ",(0,t.jsx)(n.code,{children:"ORDERED"}),", where packets from a sending module must be processed by the\nreceiving module in the order they were sent. Or a channel can be ",(0,t.jsx)(n.code,{children:"UNORDERED"}),", where packets\nfrom a sending module are processed in the order they arrive (might be in a different order than they were sent)."]}),"\n",(0,t.jsx)(n.p,{children:"Modules can choose which channels they wish to communicate over with, thus IBC expects modules to\nimplement callbacks that are called during the channel handshake. These callbacks can do custom\nchannel initialization logic. If any callback returns an error, the channel handshake fails. Thus, by\nreturning errors on callbacks, modules can programmatically reject and accept channels."}),"\n",(0,t.jsx)(n.p,{children:"The channel handshake is a 4-step handshake. Briefly, if a given chain A wants to open a channel with\nchain B using an already established connection:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["chain A sends a ",(0,t.jsx)(n.code,{children:"ChanOpenInit"})," message to signal a channel initialization attempt with chain B."]}),"\n",(0,t.jsxs)(n.li,{children:["chain B sends a ",(0,t.jsx)(n.code,{children:"ChanOpenTry"})," message to try opening the channel on chain A."]}),"\n",(0,t.jsxs)(n.li,{children:["chain A sends a ",(0,t.jsx)(n.code,{children:"ChanOpenAck"})," message to mark its channel end status as open."]}),"\n",(0,t.jsxs)(n.li,{children:["chain B sends a ",(0,t.jsx)(n.code,{children:"ChanOpenConfirm"})," message to mark its channel end status as open."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If all handshake steps are successful, the channel is opened on both sides. At each step in the handshake, the module\nassociated with the ",(0,t.jsx)(n.code,{children:"ChannelEnd"})," executes its callback. So\non ",(0,t.jsx)(n.code,{children:"ChanOpenInit"}),", the module on chain A executes its callback ",(0,t.jsx)(n.code,{children:"OnChanOpenInit"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The channel identifier is auto derived in the format: ",(0,t.jsx)(n.code,{children:"channel-{N}"})," where N is the next sequence to be used."]}),"\n",(0,t.jsxs)(n.p,{children:["Just as ports came with dynamic capabilities, channel initialization returns a dynamic capability\nthat the module ",(0,t.jsx)(n.strong,{children:"must"})," claim so that they can pass in a capability to authenticate channel actions\nlike sending packets. The channel capability is passed into the callback on the first parts of the\nhandshake; either ",(0,t.jsx)(n.code,{children:"OnChanOpenInit"})," on the initializing chain or ",(0,t.jsx)(n.code,{children:"OnChanOpenTry"})," on the other chain."]}),"\n",(0,t.jsx)(n.h4,{id:"closing-channels",children:"Closing channels"}),"\n",(0,t.jsxs)(n.p,{children:["Closing a channel occurs in 2 handshake steps as defined in ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics",children:"ICS 04"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ChanCloseInit"})," closes a channel on the executing chain if the channel exists, it is not\nalready closed and the connection it exists upon is OPEN. Channels can only be closed by a\ncalling module or in the case of a packet timeout on an ORDERED channel."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ChanCloseConfirm"})," is a response to a counterparty channel executing ",(0,t.jsx)(n.code,{children:"ChanCloseInit"}),". The channel\non the executing chain closes if the channel exists, the channel is not already closed,\nthe connection the channel exists upon is OPEN and the executing chain successfully verifies\nthat the counterparty channel has been closed."]}),"\n",(0,t.jsx)(n.h3,{id:"packets",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",children:"Packets"})}),"\n",(0,t.jsxs)(n.p,{children:["Modules communicate with each other by sending packets over IBC channels. All\nIBC packets contain the destination ",(0,t.jsx)(n.code,{children:"portID"})," and ",(0,t.jsx)(n.code,{children:"channelID"})," along with the source ",(0,t.jsx)(n.code,{children:"portID"})," and\n",(0,t.jsx)(n.code,{children:"channelID"}),". This packet structure allows modules to know the sender module of a given packet. IBC packets\ncontain a sequence to optionally enforce ordering."]}),"\n",(0,t.jsxs)(n.p,{children:["IBC packets also contain a ",(0,t.jsx)(n.code,{children:"TimeoutHeight"})," and a ",(0,t.jsx)(n.code,{children:"TimeoutTimestamp"})," that determine the deadline before the receiving module must process a packet."]}),"\n",(0,t.jsxs)(n.p,{children:["Modules send custom application data to each other inside the ",(0,t.jsx)(n.code,{children:"Data []byte"})," field of the IBC packet.\nThus, packet data is opaque to IBC handlers. It is incumbent on a sender module to encode\ntheir application-specific packet information into the ",(0,t.jsx)(n.code,{children:"Data"})," field of packets. The receiver\nmodule must decode that ",(0,t.jsx)(n.code,{children:"Data"})," back to the original application data."]}),"\n",(0,t.jsx)(n.h3,{id:"receipts-and-timeouts",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",children:"Receipts and Timeouts"})}),"\n",(0,t.jsxs)(n.p,{children:["Since IBC works over a distributed network and relies on potentially faulty relayers to relay messages between ledgers,\nIBC must handle the case where a packet does not get sent to its destination in a timely manner or at all. Packets must\nspecify a non-zero value for timeout height (",(0,t.jsx)(n.code,{children:"TimeoutHeight"}),") or timeout timestamp (",(0,t.jsx)(n.code,{children:"TimeoutTimestamp"})," ) after which a packet can no longer be successfully received on the destination chain."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"timeoutHeight"})," indicates a consensus height on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"timeoutTimestamp"})," indicates a timestamp on the destination chain after which the packet is no longer be processed, and instead counts as having timed-out."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If the timeout passes without the packet being successfully received, the packet can no longer be\nreceived on the destination chain. The sending module can timeout the packet and take appropriate actions."}),"\n",(0,t.jsx)(n.p,{children:"If the timeout is reached, then a proof of packet timeout can be submitted to the original chain. The original chain can then perform\napplication-specific logic to timeout the packet, perhaps by rolling back the packet send changes (refunding senders any locked funds, etc.)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In ORDERED channels, a timeout of a single packet in the channel causes the channel to close."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If packet sequence ",(0,t.jsx)(n.code,{children:"n"})," times out, then a packet at sequence ",(0,t.jsx)(n.code,{children:"k > n"})," cannot be received without violating the contract of ORDERED channels that packets are processed in the order that they are sent."]}),"\n",(0,t.jsxs)(n.li,{children:["Since ORDERED channels enforce this invariant, a proof that sequence ",(0,t.jsx)(n.code,{children:"n"})," has not been received on the destination chain by the specified timeout of packet ",(0,t.jsx)(n.code,{children:"n"})," is sufficient to timeout packet ",(0,t.jsx)(n.code,{children:"n"})," and close the channel."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In UNORDERED channels, the application-specific timeout logic for that packet is applied and the channel is not closed."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Packets can be received in any order."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"IBC writes a packet receipt for each sequence receives in the UNORDERED channel. This receipt does not contain information; it is simply a marker intended to signify that the UNORDERED channel has received a packet at the specified sequence."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To timeout a packet on an UNORDERED channel, a proof is required that a packet receipt ",(0,t.jsx)(n.strong,{children:"does not exist"})," for the packet's sequence by the specified timeout."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"For this reason, most modules should use UNORDERED channels as they require fewer liveness guarantees to function effectively for users of that channel."}),"\n",(0,t.jsx)(n.h3,{id:"acknowledgments",children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/04-channel",children:"Acknowledgments"})}),"\n",(0,t.jsx)(n.p,{children:"Modules can also choose to write application-specific acknowledgments upon processing a packet. Acknowledgments can be done:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Synchronously on ",(0,t.jsx)(n.code,{children:"OnRecvPacket"})," if the module processes packets as soon as they are received from IBC module."]}),"\n",(0,t.jsx)(n.li,{children:"Asynchronously if module processes packets at some later point after receiving the packet."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This acknowledgment data is opaque to IBC much like the packet ",(0,t.jsx)(n.code,{children:"Data"})," and is treated by IBC as a simple byte string ",(0,t.jsx)(n.code,{children:"[]byte"}),". Receiver modules must encode their acknowledgment so that the sender module can decode it correctly. The encoding must be negotiated between the two parties during version negotiation in the channel handshake."]}),"\n",(0,t.jsx)(n.p,{children:"The acknowledgment can encode whether the packet processing succeeded or failed, along with additional information that allows the sender module to take appropriate action."}),"\n",(0,t.jsx)(n.p,{children:"After the acknowledgment has been written by the receiving chain, a relayer relays the acknowledgment back to the original sender module."}),"\n",(0,t.jsx)(n.p,{children:"The original sender module then executes application-specific acknowledgment logic using the contents of the acknowledgment."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After an acknowledgement fails, packet-send changes can be rolled back (for example, refunding senders in ICS20)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After an acknowledgment is received successfully on the original sender on the chain, the corresponding packet commitment is deleted since it is no longer needed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"further-readings-and-specs",children:"Further Readings and Specs"}),"\n",(0,t.jsx)(n.p,{children:"If you want to learn more about IBC, check the following specifications:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/README.md",children:"IBC specification overview"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>c});var t=i(67294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);