import React, { Component } from 'react';
import './css/08_08_youtube_grid.css';

class YouTube extends Component {
    constructor(props) {
        super(props);
    }

    state = { searchWord: "Item", keyword : "Block" , blockClicked : ""};

    handleChange = (event) => {
        this.setState({ searchWord: event.target.value });
    }

    detectChange = (event) => {
        if ((event.keyCode || event.which ) ===13) {
            this.setState({ keyword: event.target.value });
        }
    }

    blockClick = (e, id) => {
        this.setState({ blockClicked: `Block ${id}` });
    }

    render() {
        return (
            <div>
                <header style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div>youtube</div>
                    <input type="text" value={this.state.searchWord} onChange={this.handleChange} onClick={(event) => { this.setState({ keyword: event.target.value }) }} onKeyPress={this.detectChange} style={{ width: "40%" }} />
                    <button>{this.state.blockClicked === "" ? ("account") : (this.state.blockClicked)}</button>
                </header>

                {/*<div style="display:flex; flex-direction:row; margin:1px; margin-top:20px; border:1px dotted red">*/}

                <div style={{ display: "flex", flexDirection: "row", margin: "1px", marginTop: "20px", border: "1px dotted red" }}>
                    <div style={{ margin: "2px", padding: "1px", border: "1px solid blue", width: "25%", height: "670px", overflowY: "scroll" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                            <div class="sub-item-leftside">{this.state.searchWord}</div>
                        </div>
                    </div>
                    <div style={{ margin: "2px", padding: "1px", border: "1px solid blue", width: "75%" }}>
                        {/*<div style="margin:2px; padding: 1px; border:1px solid blue; display:grid; grid-template-columns:repeat(4,1fr);
                grid-template-rows:repeat(3,1fr); height:670px; overflow-y:scroll;">*/}

                        <div style={{
                            margin: "2px", padding: "1px", border: "1px solid blue", display: "grid", gridTemplateColumns: "repeat(4,1fr)",
                            gridTemplateRows: "repeat(3,1fr)", height: "670px", overflowY: "scroll"
                        }}>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e,1)}}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e,2) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e,3) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 4) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 5) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 6) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 7) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 8) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 9) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 10) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 11) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 12) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 13) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 14) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 15) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 16) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 17) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 18) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 19) }}>{this.state.keyword}</div>
                            <div class="box-grid" onClick={(e) => { this.blockClick(e, 20) }}>{this.state.keyword}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default YouTube;