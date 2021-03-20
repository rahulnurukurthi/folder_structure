import React from 'react';
import ContentLoader from 'react-content-loader'

const MyLoader = (props)=> (
    <ContentLoader
        height={185}
        width={350}
        speed={2}
        primaryColor="#F6F6F9"
        secondaryColor="#DEDEE1"
        {...props}
    >
        <rect x="10" y="15" rx="2" ry="2" width="210" height="18"/>
        <rect x="10" y="50" rx="2" ry="2" width="90" height="18"/>
        <rect x="130" y="50" rx="2" ry="2" width="90" height="18"/>
        <rect x="250" y="50" rx="2" ry="2" width="90" height="18"/>
        <rect x="10" y="100" rx="2" ry="2" width="90" height="18"/>
        <rect x="130" y="100" rx="2" ry="2" width="90" height="18"/>
        <rect x="250" y="100" rx="2" ry="2" width="90" height="18"/>
        <rect x="10" y="150" rx="2" ry="2" width="90" height="18"/>
        <rect x="130" y="150" rx="2" ry="2" width="90" height="18"/>
        <rect x="250" y="150" rx="2" ry="2" width="90" height="18"/>
        {/*<rect x="70" y="15" rx="4" ry="4" width="500" height="6.4" />
        <rect x="70" y="35" rx="3" ry="3" width="500" height="6.4" />
        <rect x="-0.47" y="84.16" rx="3" ry="3" width="350" height="6.4" />*/}
        {/*<rect x="-0.04" y="104.16" rx="3" ry="3" width="380" height="6.4" />*/}
    </ContentLoader>
);

const JstreeStructure = props => (
    <ContentLoader
        height={600}
        width={400}
        speed={3}
        primaryColor="#DADADD"
        secondaryColor="#F6F6F9"
        {...props}
    >
        <circle cx="20" cy="40" r="20" />
        <rect x="50" y="25" rx="2" ry="2" width="230" height="30"/>

        <circle cx="60" cy="90" r="20" />
        <rect x="90" y="75" rx="2" ry="2" width="250" height="30"/>

        <circle cx="100" cy="140" r="20" />
        <rect x="130" y="125" rx="2" ry="2" width="280" height="30"/>

        <circle cx="140" cy="190" r="20" />
        <rect x="170" y="175" rx="2" ry="2" width="230" height="30"/>

        <circle cx="60" cy="240" r="20" />
        <rect x="90" y="225" rx="2" ry="2" width="310" height="30"/>

        <circle cx="100" cy="290" r="20" />
        <rect x="130" y="275" rx="2" ry="2" width="200" height="30"/>

        <circle cx="140" cy="340" r="20" />
        <rect x="170" y="325" rx="2" ry="2" width="180" height="30"/>

        <circle cx="180" cy="390" r="20" />
        <rect x="210" y="375" rx="2" ry="2" width="100" height="30"/>

        {/*<circle cx="140" cy="440" r="20" />
        <rect x="170" y="425" rx="2" ry="2" width="180" height="30"/>

        <circle cx="140" cy="490" r="20" />
        <rect x="170" y="475" rx="2" ry="2" width="200" height="30"/>

        <circle cx="100" cy="540" r="20" />
        <rect x="130" y="525" rx="2" ry="2" width="250" height="30"/>

        <circle cx="140" cy="590" r="20" />
        <rect x="170" y="575" rx="2" ry="2" width="150" height="30"/>*/}
    </ContentLoader>
);

const GridFolderStructure = props => (
    <ContentLoader
        height={600}
        width={400}
        speed={3}
        primaryColor="#DADADD"
        secondaryColor="#F6F6F9"
        {...props}
    >
        <rect x="16" y="20" rx="2" ry="2" width="15" height="15"/>
        <rect x="50" y="11" rx="2" ry="2" width="25" height="30"/>
        <rect x="72" y="16" rx="2" ry="2" width="25" height="25"/>
        <rect x="115" y="20" rx="2" ry="2" width="170" height="20"/>
        <rect x="16" y="50" rx="2" ry="2" width="500" height="1"/>

        <rect x="16" y="70" rx="2" ry="2" width="15" height="15"/>
        <rect x="50" y="61" rx="2" ry="2" width="25" height="30"/>
        <rect x="72" y="66" rx="2" ry="2" width="25" height="25"/>
        <rect x="115" y="70" rx="2" ry="2" width="170" height="20"/>
        <rect x="16" y="100" rx="2" ry="2" width="500" height="1"/>

        <rect x="16" y="120" rx="2" ry="2" width="15" height="15"/>
        <rect x="50" y="111" rx="2" ry="2" width="25" height="30"/>
        <rect x="72" y="116" rx="2" ry="2" width="25" height="25"/>
        <rect x="115" y="120" rx="2" ry="2" width="170" height="20"/>
        <rect x="16" y="150" rx="2" ry="2" width="500" height="1"/>


    </ContentLoader>
);
export { MyLoader, JstreeStructure, GridFolderStructure };
