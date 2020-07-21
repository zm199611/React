import React, { useEffect ,useState } from 'react'

export default function Recommend() {
    return (
        <div>
            <>
                Recommend
            </>
        </div>
    )
}

const mapStateToProps = (state) =>({
    recommendList:state.recommend.recommendList
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Recommend);