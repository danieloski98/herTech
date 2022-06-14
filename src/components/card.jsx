import React from "react";

export default function Card(){
    return(
        <div className="flex gap-2 px-5 py-7">
                    <img src={ logo1} />
                    <div className="w-96 h-auto p-3">
                        <h1>Product Manager—Remote </h1>
                        <p>Meta</p>
                        <div className="flex gap-3 pt-3">
                            <img src={ mappin} />
                            <p className="text-sm pt-1 -ml-2"> USA, Remote </p>
                            <img src={ briefcase} />
                            <p className="text-sm pt-1 -ml-2"> Full-time </p>
                            <img src={ dollar} />
                            <p className="text-sm pt-1 -ml-2">120k - 130k </p>
                        </div>
                    </div>
                    <p className="text-right ml-36"> Posted 5mins ago</p>
                  </div>
    )
}
