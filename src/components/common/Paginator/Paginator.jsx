import React from 'react';
import s from './Paginator.module.css';

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount/props.limit);
    let currentPageBlock = pageCount;
    if (pageCount > props.limit) {
        currentPageBlock = props.limit + props.offset - 1;
    }
    let paginationArray = [];
    for (let i = props.offset; i <= currentPageBlock; i++) {
        if (i <= pageCount) {
            paginationArray.push(i);
        }
    }

    let pagination = paginationArray.map((p) => {
        return props.currentPage === p ?
            <span className={s.selectedPage} onClick={ () => {props.selectPage(p)} }>{p}</span> :
            <span className={s.unselectedPage} onClick={ () => {props.selectPage(p)} }>{p}</span>
    })

    return (
        <div>
            <span style={{marginRight: '5px'}}
                  onClick={ () => {
                      if (props.offset > 1) props.setOffset(-props.limit)
                  } }
            >-back-</span>
            {pagination}
            <span style={{marginLeft: '5px'}}
                  onClick={ () => {
                      if (props.offset + props.limit < pageCount) props.setOffset(props.limit)
                  } }
            >-next-</span>
        </div>
    );
}

export default Paginator;