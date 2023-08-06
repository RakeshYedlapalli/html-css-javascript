const axios = require('axios');
const fs = require('fs');
const CircularJSON = require('circular-json');

const canKill = false;


const apiCalls = [
    {
        "id": "fed14545-9554-4b4e-962b-afc78489ca58",
        "sizeRangeCode": "A17: 5: XS-XL A17",
        "sizeModelId": "d2a4d8c7-2b54-460a-b40b-0eb50692b2ee",
        "description": "XS-XL A17",
        "sizeList": [
            {
                "id": "2493d1ef-c23e-4cc6-9e68-8fdb912ad440"
            },
            {
                "id": "67a15932-283f-4a6a-b6e3-e494e9f92ac3"
            },
            {
                "id": "b3064771-b75b-49a7-8f65-86fa10adde49"
            },
            {
                "id": "dcab2484-d938-4529-9f2b-5eaf67a6c57e"
            },
            {
                "id": "ec78ec49-3b09-47de-9f8a-fb18d21d0495"
            }
        ],
        "displayValue": "A17: 5: XS-XL A17",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "44a12fb1-1d8d-43b4-8d5d-bd32d9a95b07",
        "sizeRangeCode": "A26: 2: S/M,L/XL",
        "sizeModelId": "d745d633-aebd-4b80-a1ad-11bef087f4a1",
        "description": "S/M,L/XL",
        "sizeList": [
            {
                "id": "5f8bd723-2def-4609-98ca-362bcb1338a2"
            },
            {
                "id": "faf96164-057f-4fdf-a223-a65f9883fa80"
            }
        ],
        "displayValue": "A26: 2: S/M,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "abc77c49-1683-4527-ba47-04d983f4fdaf",
        "sizeRangeCode": "M01: 2: S/M,L/XL",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "S/M,L/XL",
        "sizeList": [
            {
                "id": "3fbba6fa-1e25-4bd7-91a6-172bb3d0513c"
            },
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            }
        ],
        "displayValue": "M01: 2: S/M,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "87a993b3-fb28-4f39-9662-7c2336fb02c6",
        "sizeRangeCode": "M01: 2: S/M,M/L",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "S/M,M/L",
        "sizeList": [
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            },
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            }
        ],
        "displayValue": "M01: 2: S/M,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "47c79262-b92b-40c3-b17a-a92d5a2bcaf3",
        "sizeRangeCode": "M01: 2: XS/S,M/L",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XS/S,M/L",
        "sizeList": [
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 2: XS/S,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f99f67a5-0eee-4dcd-a3db-54201a8cc8be",
        "sizeRangeCode": "M01: 2: XS/S,S/M",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XS/S,S/M",
        "sizeList": [
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 2: XS/S,S/M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "327cda5c-28dc-48b1-a9e8-853a93a7a43a",
        "sizeRangeCode": "M01: 2: XXS/XS,S/M",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XXS/XS,S/M",
        "sizeList": [
            {
                "id": "72deab5d-d66e-4f1b-a877-c0747e87a619"
            },
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            }
        ],
        "displayValue": "M01: 2: XXS/XS,S/M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ecfa74dd-2d60-495b-9f95-6fa9c687b558",
        "sizeRangeCode": "M01: 3: SU22-XS/S, M/L, XL/XXL",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "SU22-XS/S, M/L, XL/XXL",
        "sizeList": [
            {
                "id": "0fa5a548-db9e-4ed0-b927-e6d6d373232b"
            },
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 3: SU22-XS/S, M/L, XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "94ee186c-106c-45df-94da-849e9d649995",
        "sizeRangeCode": "M01: 3: XS/S,S/M,M/L",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XS/S,S/M,M/L",
        "sizeList": [
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            },
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 3: XS/S,S/M,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4b00a92c-3e6b-466e-a229-8e7b79496d43",
        "sizeRangeCode": "M01: 3: XXS/XS, S/M, L/XL",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XXS/XS, S/M, L/XL",
        "sizeList": [
            {
                "id": "3fbba6fa-1e25-4bd7-91a6-172bb3d0513c"
            },
            {
                "id": "72deab5d-d66e-4f1b-a877-c0747e87a619"
            },
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            }
        ],
        "displayValue": "M01: 3: XXS/XS, S/M, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f3e9413f-749e-4c4c-961f-8dcc6c61dac2",
        "sizeRangeCode": "M01: 3: XXS/XS, S/M, L/XL_New",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XXS/XS, S/M, L/XL_New",
        "sizeList": [
            {
                "id": "1c8825ea-bf42-4a42-a590-2321db51fbe9"
            },
            {
                "id": "72deab5d-d66e-4f1b-a877-c0747e87a619"
            },
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            }
        ],
        "displayValue": "M01: 3: XXS/XS, S/M, L/XL_New",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f3f4a14e-a7d5-4e3b-99fb-2f29c803cd48",
        "sizeRangeCode": "M01: 4: XS/S - L/XL",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "XS/S - L/XL",
        "sizeList": [
            {
                "id": "3fbba6fa-1e25-4bd7-91a6-172bb3d0513c"
            },
            {
                "id": "bb948425-bafd-431a-b434-011bab619057"
            },
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 4: XS/S - L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2dedcefa-4a8e-4752-8526-5e45416f9496",
        "sizeRangeCode": "M01: 5: SU22-XS/S, M/L, XL/XXL, T XS/S, T M/L, T XL/XXL, P XS/S, P M/L, P XL/XXL",
        "sizeModelId": "b75aa9c3-7216-4e47-b9a5-684bf97a49b3",
        "description": "SU22-XS/S, M/L, XL/XXL, T XS/S, T M/L, T XL/XXL, P XS/S, P M/L, P XL/XXL",
        "sizeList": [
            {
                "id": "0fa5a548-db9e-4ed0-b927-e6d6d373232b"
            },
            {
                "id": "1faaf8b0-38e8-4a9a-916c-79878a5e74e2"
            },
            {
                "id": "a276c2c1-3900-4af8-9752-024e26906f99"
            },
            {
                "id": "daee70ce-4421-4a61-876c-d56a90483daf"
            },
            {
                "id": "f39abcb9-90e7-41e6-b9ce-4a710c490af2"
            }
        ],
        "displayValue": "M01: 5: SU22-XS/S, M/L, XL/XXL, T XS/S, T M/L, T XL/XXL, P XS/S, P M/L, P XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "19528bb9-7294-4f78-a89d-4bdc0f49556f",
        "sizeRangeCode": "M02: 2: S/M, M/L",
        "sizeModelId": "915aa93e-bbab-4baa-9bf3-d62976a12b96",
        "description": "S/M, M/L",
        "sizeList": [
            {
                "id": "ed151405-6d03-43c1-8d2c-37d35a2382c2"
            },
            {
                "id": "fa972675-df85-422c-ab94-6d70fa50f82f"
            }
        ],
        "displayValue": "M02: 2: S/M, M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3c2e5681-bfa2-4b92-9f4d-d8d512f2b9ed",
        "sizeRangeCode": "M02: 2: XS/S,M/L",
        "sizeModelId": "915aa93e-bbab-4baa-9bf3-d62976a12b96",
        "description": "XS/S,M/L",
        "sizeList": [
            {
                "id": "3dcf12a7-d79a-41d3-b1c4-0c1b4196483e"
            },
            {
                "id": "ed151405-6d03-43c1-8d2c-37d35a2382c2"
            }
        ],
        "displayValue": "M02: 2: XS/S,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0904812d-8ad2-422e-9c3a-c86e68cd071c",
        "sizeRangeCode": "M02: 3: XXS/XS, S/M, L/XL",
        "sizeModelId": "915aa93e-bbab-4baa-9bf3-d62976a12b96",
        "description": "XXS/XS, S/M, L/XL",
        "sizeList": [
            {
                "id": "5da440eb-8c3e-4867-8381-02249a50202c"
            },
            {
                "id": "99d3c895-bc14-45e5-a4d8-4eec0a8d5b2d"
            },
            {
                "id": "fa972675-df85-422c-ab94-6d70fa50f82f"
            }
        ],
        "displayValue": "M02: 3: XXS/XS, S/M, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "565cd0b6-a778-4d9e-b1ff-2068f1ed30ce",
        "sizeRangeCode": "M03: 10: XS,S,M,L,XL,XS/P,S/P,M/P,L/P,XL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XS/P,S/P,M/P,L/P,XL/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 10: XS,S,M,L,XL,XS/P,S/P,M/P,L/P,XL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "557d3d9d-b103-444b-96a9-b127e428e361",
        "sizeRangeCode": "M03: 10: XS-XXL, M Plus-XXL Plus",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, M Plus-XXL Plus",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "75a55ff3-536e-492e-ae3c-b8e1892911d9"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "880d605f-066f-4275-8217-cb2581b38afd"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 10: XS-XXL, M Plus-XXL Plus",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b7b6b467-0b02-430d-b1c9-42d1144b1c5d",
        "sizeRangeCode": "M03: 10: XS-XXL, XS-L Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, XS-L Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 10: XS-XXL, XS-L Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5dc2b9b0-7265-4e62-a744-91257c731780",
        "sizeRangeCode": "M03: 10: XS-XXXL, M Tall-XL Tall",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXXL, M Tall-XL Tall",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            }
        ],
        "displayValue": "M03: 10: XS-XXXL, M Tall-XL Tall",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c85375d1-e163-45be-9336-a585e75f8380",
        "sizeRangeCode": "M03: 11: SX,S,M,L,XL,XS/S,M/S,L/S,M/T,L/T,XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "SX,S,M,L,XL,XS/S,M/S,L/S,M/T,L/T,XL/T",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            }
        ],
        "displayValue": "M03: 11: SX,S,M,L,XL,XS/S,M/S,L/S,M/T,L/T,XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f93ef0ec-efcd-4054-b738-13a4832f29a9",
        "sizeRangeCode": "M03: 12: XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,S/P,M/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,S/P,M/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 12: XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,S/P,M/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "50ea5432-a286-421f-80e1-178366a547cb",
        "sizeRangeCode": "M03: 12: XS-XXL, S-XL Tall, S-M Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, S-XL Tall, S-M Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 12: XS-XXL, S-XL Tall, S-M Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a89bd988-9a49-483b-8432-a9a0871bec9d",
        "sizeRangeCode": "M03: 12: XS-XXL, S-XL Tall, XS-S Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, S-XL Tall, XS-S Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 12: XS-XXL, S-XL Tall, XS-S Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "083010b9-dbb3-4fb7-babc-e71aff1a526f",
        "sizeRangeCode": "M03: 12: XS-XXL, XS/P-XXL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, XS/P-XXL/P",
        "sizeList": [
            {
                "id": "0e40bb4d-fec1-439e-95cc-41632a6618da"
            },
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 12: XS-XXL, XS/P-XXL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "84907090-9f2f-4d75-8561-254cc551bcd1",
        "sizeRangeCode": "M03: 12: XS-XXXL, M Tall-XXXL Tall",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXXL, M Tall-XXXL Tall",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "982fce26-ec8c-4828-9759-a47ce8355565"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            },
            {
                "id": "fe33eed5-f206-44a3-8603-5f9958b28ac0"
            }
        ],
        "displayValue": "M03: 12: XS-XXXL, M Tall-XXXL Tall",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "225dd73f-9a85-4820-915e-9611b8c75c72",
        "sizeRangeCode": "M03: 12: XS/SHR,S/SHR, M/SHR,XS,S,M,L,XL,XXL,M/T,L/T,XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS/SHR,S/SHR, M/SHR,XS,S,M,L,XL,XXL,M/T,L/T,XL/T",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            }
        ],
        "displayValue": "M03: 12: XS/SHR,S/SHR, M/SHR,XS,S,M,L,XL,XXL,M/T,L/T,XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0e425f3a-abc7-4bfa-9f0f-c95a0466062d",
        "sizeRangeCode": "M03: 12: XXS SLIM XXS STANDARD XS SLIM XS STANDARD S SLIM S STANDARD M SLIM M STANDARD L SLIM L STANDARD XL SLIM XL STANDARD ",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS SLIM XXS STANDARD XS SLIM XS STANDARD S SLIM S STANDARD M SLIM M STANDARD L SLIM L STANDARD XL SLIM XL STANDARD ",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "775dd9d5-cc1a-493b-bc21-d6d1191457ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 12: XXS SLIM XXS STANDARD XS SLIM XS STANDARD S SLIM S STANDARD M SLIM M STANDARD L SLIM L STANDARD XL SLIM XL STANDARD ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fc4c82fe-b568-4307-845e-59c69a9fa44e",
        "sizeRangeCode": "M03: 13: XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 13: XS,S,M,L,XL,XXL,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "71129f70-1be2-432b-86d5-c0050a7efd11",
        "sizeRangeCode": "M03: 13: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 13: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "37b34423-d2ec-40e0-83b0-17cfb0366fce",
        "sizeRangeCode": "M03: 13: XS-XL, XS/P-L/P, S/T-XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XL, XS/P-L/P, S/T-XL/T",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 13: XS-XL, XS/P-L/P, S/T-XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f00bb08e-0097-48f1-9308-7ca8a00236c8",
        "sizeRangeCode": "M03: 13: XS-XXL, S-XL Tall, XS-M Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, S-XL Tall, XS-M Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 13: XS-XXL, S-XL Tall, XS-M Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6ff158af-b101-497b-8780-713e6d19acf4",
        "sizeRangeCode": "M03: 13: XXS-XXL, S-XL Tall, S-M Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-XXL, S-XL Tall, S-M Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 13: XXS-XXL, S-XL Tall, S-M Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fcc04be3-630e-466e-8668-a56f5ed4821e",
        "sizeRangeCode": "M03: 14: GS LOUNGE EXTENDED SIZING BTMS US",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "GS LOUNGE EXTENDED SIZING BTMS US",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: GS LOUNGE EXTENDED SIZING BTMS US",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d98d2b20-f6e0-4ac2-ade5-3fe03c746670",
        "sizeRangeCode": "M03: 14: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P,L/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P,L/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,S/P,M/P,L/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "453475c4-0d08-462e-b129-dadc483221fd",
        "sizeRangeCode": "M03: 14: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XS,S,M,L,XL,XXL,XXS,S/T,M/T,L/T,XL/T,XS/P,S/P,M/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a35c9e06-45be-4bfa-9b5b-7f06de27f2e6",
        "sizeRangeCode": "M03: 14: XS,XS TALL,S,S TALL,M,M TALL,L,L TALL,XL,XL TALL,XXL,XXL TALL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,XS TALL,S,S TALL,M,M TALL,L,L TALL,XL,XL TALL,XXL,XXL TALL",
        "sizeList": [
            {
                "id": "0978c7c4-5f49-4348-ac1c-84de1c5733d7"
            },
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "982fce26-ec8c-4828-9759-a47ce8355565"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            },
            {
                "id": "fe33eed5-f206-44a3-8603-5f9958b28ac0"
            }
        ],
        "displayValue": "M03: 14: XS,XS TALL,S,S TALL,M,M TALL,L,L TALL,XL,XL TALL,XXL,XXL TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "85f0e45e-80d1-4f3e-8913-39d9b10eab1d",
        "sizeRangeCode": "M03: 14: XS-L/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-L/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "775dd9d5-cc1a-493b-bc21-d6d1191457ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XS-L/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "27b17751-54a8-420c-a560-9f0ae5323665",
        "sizeRangeCode": "M03: 14: XS-XXL, S-XL Tall, XS-L Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, S-XL Tall, XS-L Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XS-XXL, S-XL Tall, XS-L Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6f0c1444-1b3a-4003-ab18-dac57cd5c1fc",
        "sizeRangeCode": "M03: 14: XS/P,XS,S/P,S,S/T,M/P,M,M/T,L,L/T,XL,XL/T,XXL,XXL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS/P,XS,S/P,S,S/T,M/P,M,M/T,L,L/T,XL,XL/T,XXL,XXL/T",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            },
            {
                "id": "fe33eed5-f206-44a3-8603-5f9958b28ac0"
            }
        ],
        "displayValue": "M03: 14: XS/P,XS,S/P,S,S/T,M/P,M,M/T,L,L/T,XL,XL/T,XXL,XXL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "357a839a-9a1c-4eec-85a8-0692a450ce17",
        "sizeRangeCode": "M03: 14: XXS-XXL, S-XL Tall, S-L Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-XXL, S-XL Tall, S-L Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XXS-XXL, S-XL Tall, S-L Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "42b7018c-3484-4c4f-a661-0c1c6d2c841d",
        "sizeRangeCode": "M03: 14: XXS-XXL, S-XL Tall, XS-M Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-XXL, S-XL Tall, XS-M Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 14: XXS-XXL, S-XL Tall, XS-M Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "97851fa2-ba7e-4353-8972-976a26f595c1",
        "sizeRangeCode": "M03: 15: M03 ALL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M03 ALL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "38379543-f684-4c85-8955-73ea41a4dc9d"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "61e18118-1166-4ff8-a570-08ee49837dee"
            },
            {
                "id": "6a376c61-6e6c-4778-b2b6-3d47c7032e7b"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            },
            {
                "id": "fbe71e8a-16f2-457e-a9c7-c15c34988578"
            }
        ],
        "displayValue": "M03: 15: M03 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1099f17a-6110-41bb-934a-5e558a41f433",
        "sizeRangeCode": "M03: 15: XS/P-XXL/P, XS-XXL, M/T-XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS/P-XXL/P, XS-XXL, M/T-XL/T",
        "sizeList": [
            {
                "id": "0e40bb4d-fec1-439e-95cc-41632a6618da"
            },
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            }
        ],
        "displayValue": "M03: 15: XS/P-XXL/P, XS-XXL, M/T-XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f0162770-a3fd-43ec-9be5-6ff3cde019c6",
        "sizeRangeCode": "M03: 15: XXS - XXL, S - XL TALL, XS - L PETITE",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS - XXL, S - XL TALL, XS - L PETITE",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 15: XXS - XXL, S - XL TALL, XS - L PETITE",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "74a53d45-a920-47a4-b458-797935d3ea8a",
        "sizeRangeCode": "M03: 15: XXS-XXL, S-XL Tall, XS-L Petite",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-XXL, S-XL Tall, XS-L Petite",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 15: XXS-XXL, S-XL Tall, XS-L Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dce08a1c-a811-4bb2-8bd3-4ff600c99d54",
        "sizeRangeCode": "M03: 18: XS-XXL, XS/T-XXL/T, XS/P-XXL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, XS/T-XXL/T, XS/P-XXL/P",
        "sizeList": [
            {
                "id": "0978c7c4-5f49-4348-ac1c-84de1c5733d7"
            },
            {
                "id": "0e40bb4d-fec1-439e-95cc-41632a6618da"
            },
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            },
            {
                "id": "fe33eed5-f206-44a3-8603-5f9958b28ac0"
            }
        ],
        "displayValue": "M03: 18: XS-XXL, XS/T-XXL/T, XS/P-XXL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b7aa0481-b0d6-4c2f-a904-1ad0ab966a88",
        "sizeRangeCode": "M03: 18: XS-XXXL, XS/P-XL/P, M+-XL+, M/T-XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXXL, XS/P-XL/P, M+-XL+, M/T-XL/T",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "880d605f-066f-4275-8217-cb2581b38afd"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            }
        ],
        "displayValue": "M03: 18: XS-XXXL, XS/P-XL/P, M+-XL+, M/T-XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "10e90325-72d4-4d74-aaf0-6ff3fdd1a16a",
        "sizeRangeCode": "M03: 1: L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "L",
        "sizeList": [
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            }
        ],
        "displayValue": "M03: 1: L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7f69d618-07e9-4b1b-b7f7-1bf297da60c1",
        "sizeRangeCode": "M03: 1: M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M",
        "sizeList": [
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 1: M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9c1cd675-177c-410c-8b67-5a9b16aa8065",
        "sizeRangeCode": "M03: 1: M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M",
        "sizeList": [
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 1: M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "86ed6ab9-2252-4164-a9f4-a5ec7bb67f5c",
        "sizeRangeCode": "M03: 1: S",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            }
        ],
        "displayValue": "M03: 1: S",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0069fc5c-3a97-4e98-83eb-a15255df8d45",
        "sizeRangeCode": "M03: 2: M,L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M,L",
        "sizeList": [
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 2: M,L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7e6b80be-4629-4dd6-ae7e-5b8cf89d5210",
        "sizeRangeCode": "M03: 2: S,M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S,M",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 2: S,M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "189ae0b0-3ae1-466a-b84f-3f747783e544",
        "sizeRangeCode": "M03: 2: XS,M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,M",
        "sizeList": [
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 2: XS,M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ee007949-f309-4b4c-9542-fc3226d53baa",
        "sizeRangeCode": "M03: 3: M-XL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M-XL",
        "sizeList": [
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 3: M-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ed9a51cd-3280-4877-898a-67c57cf31bcd",
        "sizeRangeCode": "M03: 3: S-L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S-L",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 3: S-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1328b69d-92b4-4eb1-94fd-abfa483d55d2",
        "sizeRangeCode": "M03: 3: XS,S,XXS",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,XXS",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            }
        ],
        "displayValue": "M03: 3: XS,S,XXS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ec8a8f91-06ae-4070-9b52-05d3690cdcf2",
        "sizeRangeCode": "M03: 3: XS-M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-M",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 3: XS-M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4510dd3f-af79-4ce0-89d5-400f51264bd2",
        "sizeRangeCode": "M03: 4: M-XXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M-XXL",
        "sizeList": [
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 4: M-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "993d5389-2489-4f49-bbc0-0f089338ad5c",
        "sizeRangeCode": "M03: 4: S,M,L,XXS",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S,M,L,XXS",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 4: S,M,L,XXS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1af0f67e-cd67-415c-a19a-1866dbfde639",
        "sizeRangeCode": "M03: 4: S-XL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S-XL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 4: S-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5f79e626-fea9-4ce9-8222-9da6b181ba85",
        "sizeRangeCode": "M03: 4: S/P,M/P,L/P,XL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S/P,M/P,L/P,XL/P",
        "sizeList": [
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 4: S/P,M/P,L/P,XL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f53a8e3d-5ce7-46ca-a4b5-d0407535eacb",
        "sizeRangeCode": "M03: 4: XS-L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-L",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 4: XS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "307cf85b-8056-42da-906b-ff878d8e35b8",
        "sizeRangeCode": "M03: 4: XXS-M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-M",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 4: XXS-M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dc06b098-273a-4ea3-8f2e-24ada26d85d2",
        "sizeRangeCode": "M03: 5: M,L,XL,XXL,XXXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M,L,XL,XXL,XXXL",
        "sizeList": [
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            }
        ],
        "displayValue": "M03: 5: M,L,XL,XXL,XXXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "76d94a3d-0e40-422d-aca4-fd52871ea246",
        "sizeRangeCode": "M03: 5: S-XXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S-XXL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: S-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8337c585-aab6-43cf-a7f9-50938f294bb2",
        "sizeRangeCode": "M03: 5: XS,S,M,L,XL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: XS,S,M,L,XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c1c8a2bd-ab31-4f7d-ab2e-ded5ab0c4202",
        "sizeRangeCode": "M03: 5: XS,S,M,XXS,XXXS",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,XXS,XXXS",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: XS,S,M,XXS,XXXS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "09f4470c-8e93-4ea0-85bd-2505f51b5e7f",
        "sizeRangeCode": "M03: 5: XS/P,S/P,M/P,L/P,XL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS/P,S/P,M/P,L/P,XL/P",
        "sizeList": [
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 5: XS/P,S/P,M/P,L/P,XL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8102f4c2-4696-48cc-bed7-0fae3cece5c9",
        "sizeRangeCode": "M03: 5: XXS - L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS - L",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: XXS - L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "aad82cd7-2c68-4fd5-92c8-df4a3a0724b6",
        "sizeRangeCode": "M03: 5: XXS SHR,XS SHR,S SHR,M SHR,L SHR",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS SHR,XS SHR,S SHR,M SHR,L SHR",
        "sizeList": [
            {
                "id": "38379543-f684-4c85-8955-73ea41a4dc9d"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            },
            {
                "id": "fbe71e8a-16f2-457e-a9c7-c15c34988578"
            }
        ],
        "displayValue": "M03: 5: XXS SHR,XS SHR,S SHR,M SHR,L SHR",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f1585f96-1ae5-4876-bde3-e6f24e546ef7",
        "sizeRangeCode": "M03: 5: XXS-L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS-L",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: XXS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "06f195cb-b9fc-441f-b39e-334afc377754",
        "sizeRangeCode": "M03: 5: XXS/P,XS/P,S/P,M/P,L/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/P,XS/P,S/P,M/P,L/P",
        "sizeList": [
            {
                "id": "775dd9d5-cc1a-493b-bc21-d6d1191457ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 5: XXS/P,XS/P,S/P,M/P,L/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6889379e-b0be-44c5-9319-4398eebb5d3b",
        "sizeRangeCode": "M03: 5: XXXS-M",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXXS-M",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 5: XXXS-M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "27c9e2be-8d8d-4ce8-b832-8c7aa31632d1",
        "sizeRangeCode": "M03: 5: XXXS/SHR,XXS/SHR,XS/SHR,S/SHR,M/SHR",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXXS/SHR,XXS/SHR,XS/SHR,S/SHR,M/SHR",
        "sizeList": [
            {
                "id": "38379543-f684-4c85-8955-73ea41a4dc9d"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            },
            {
                "id": "f85766d7-aa26-4065-a594-7540f4cfc5d8"
            }
        ],
        "displayValue": "M03: 5: XXXS/SHR,XXS/SHR,XS/SHR,S/SHR,M/SHR",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2bc600a-79b6-415b-9c4f-6d7c51fb8daa",
        "sizeRangeCode": "M03: 6: M03:0000:0001:0002:0003:0004:4002",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "M03:0000:0001:0002:0003:0004:4002",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 6: M03:0000:0001:0002:0003:0004:4002",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e70766e3-67b0-43cf-8e25-3df1264becb6",
        "sizeRangeCode": "M03: 6: XS+,S+,M+,L+,XL+,XXL+",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS+,S+,M+,L+,XL+,XXL+",
        "sizeList": [
            {
                "id": "21e9a831-2c1e-41e1-af7d-dc003eb33ec4"
            },
            {
                "id": "340de9cd-97a8-4034-b160-bea57f9f5420"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "75a55ff3-536e-492e-ae3c-b8e1892911d9"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "880d605f-066f-4275-8217-cb2581b38afd"
            }
        ],
        "displayValue": "M03: 6: XS+,S+,M+,L+,XL+,XXL+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f7fa8283-4861-4547-9b79-9577a10cab3a",
        "sizeRangeCode": "M03: 6: XS+,S+,M+,L+,XL+,XXL+",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS+,S+,M+,L+,XL+,XXL+",
        "sizeList": [
            {
                "id": "21e9a831-2c1e-41e1-af7d-dc003eb33ec4"
            },
            {
                "id": "340de9cd-97a8-4034-b160-bea57f9f5420"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "75a55ff3-536e-492e-ae3c-b8e1892911d9"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "880d605f-066f-4275-8217-cb2581b38afd"
            }
        ],
        "displayValue": "M03: 6: XS+,S+,M+,L+,XL+,XXL+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b4ae6607-c66a-440f-8407-f58cbd6045ed",
        "sizeRangeCode": "M03: 6: XS,S,M,XXS",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,XXS",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 6: XS,S,M,XXS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "59283826-d217-400f-ba20-6731db485afd",
        "sizeRangeCode": "M03: 6: XS-XXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 6: XS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bdac1df8-62c4-4263-b662-b71b92b49ec8",
        "sizeRangeCode": "M03: 6: XXS - XL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS - XL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 6: XXS - XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3c81339a-784b-48c2-bff2-98e0a15f7911",
        "sizeRangeCode": "M03: 6: XXS SHR,XS SHR,S SHR,M SHR,L SHR,XL SHR",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS SHR,XS SHR,S SHR,M SHR,L SHR,XL SHR",
        "sizeList": [
            {
                "id": "38379543-f684-4c85-8955-73ea41a4dc9d"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "6a376c61-6e6c-4778-b2b6-3d47c7032e7b"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            },
            {
                "id": "fbe71e8a-16f2-457e-a9c7-c15c34988578"
            }
        ],
        "displayValue": "M03: 6: XXS SHR,XS SHR,S SHR,M SHR,L SHR,XL SHR",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2f1b09fd-7b50-43f3-8ed6-f7639eb6bd97",
        "sizeRangeCode": "M03: 6: XXS/P,XS/P,S/P,M/P,L/P,XL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/P,XS/P,S/P,M/P,L/P,XL/P",
        "sizeList": [
            {
                "id": "775dd9d5-cc1a-493b-bc21-d6d1191457ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 6: XXS/P,XS/P,S/P,M/P,L/P,XL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d5173dc0-45d6-495a-aff8-0914a140ffdf",
        "sizeRangeCode": "M03: 6: XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "sizeList": [
            {
                "id": "0978c7c4-5f49-4348-ac1c-84de1c5733d7"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "b4caaeb9-2bb9-498b-81a3-47986e023810"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 6: XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fd5bc86e-ad3e-4919-99c0-139694217dc2",
        "sizeRangeCode": "M03: 6: XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "sizeList": [
            {
                "id": "0978c7c4-5f49-4348-ac1c-84de1c5733d7"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "b4caaeb9-2bb9-498b-81a3-47986e023810"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            }
        ],
        "displayValue": "M03: 6: XXS/T,XS/T,S/T,M/T,L/T,XL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "af258bc2-67d0-45be-8d7f-ae3f536c9ed6",
        "sizeRangeCode": "M03: 6: XXXS,XXS,XS,S,M,L",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXXS,XXS,XS,S,M,L",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 6: XXXS,XXS,XS,S,M,L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ffa5ee27-0bf8-4f92-b2ce-1ec514b7b925",
        "sizeRangeCode": "M03: 7: XS+,S+,M+,L+,XL+,XXL+,XXXL+",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS+,S+,M+,L+,XL+,XXL+,XXXL+",
        "sizeList": [
            {
                "id": "21e9a831-2c1e-41e1-af7d-dc003eb33ec4"
            },
            {
                "id": "340de9cd-97a8-4034-b160-bea57f9f5420"
            },
            {
                "id": "40922dac-3760-47db-b7f7-d090fc8a7ac8"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "75a55ff3-536e-492e-ae3c-b8e1892911d9"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "880d605f-066f-4275-8217-cb2581b38afd"
            }
        ],
        "displayValue": "M03: 7: XS+,S+,M+,L+,XL+,XXL+,XXXL+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d7d103d4-a313-4743-ae68-f5a90e4b1156",
        "sizeRangeCode": "M03: 7: XS-XXXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXXL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            }
        ],
        "displayValue": "M03: 7: XS-XXXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c3de7d9c-aca8-470e-af04-f1fd9eec798e",
        "sizeRangeCode": "M03: 7: XXS - XXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS - XXL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 7: XXS - XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "52f4005c-8a92-4552-a472-9f7e3fc7affc",
        "sizeRangeCode": "M03: 7: XXXS- XL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXXS- XL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "4e26f849-cac5-4dda-b266-0313e5107155"
            },
            {
                "id": "5eeb9750-dfd0-449c-8b2b-68a7d42b3896"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 7: XXXS- XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3f9f3174-a1bb-4174-bdb7-0374d6cc6df6",
        "sizeRangeCode": "M03: 8: S,M,L,XL,S/P,M/P,L/P,XL/P",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "S,M,L,XL,S/P,M/P,L/P,XL/P",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 8: S,M,L,XL,S/P,M/P,L/P,XL/P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2e58ddda-6cd1-4ba2-8f70-9e1aec45fa52",
        "sizeRangeCode": "M03: 8: XL - M036",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XL - M036",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            }
        ],
        "displayValue": "M03: 8: XL - M036",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c4de60e9-c408-43cb-8c32-31399ab0399d",
        "sizeRangeCode": "M03: 8: XS,S,M,L,XL,XS-SHR,S-SHR,M-SHR",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS,S,M,L,XL,XS-SHR,S-SHR,M-SHR",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "546a9893-2011-43a6-ab7b-e4f55fbbc2c0"
            },
            {
                "id": "5620c977-12b2-41b8-8db8-9bcfeb6cf6af"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "ebcce841-636b-4a65-90d6-0563e6de2542"
            }
        ],
        "displayValue": "M03: 8: XS,S,M,L,XL,XS-SHR,S-SHR,M-SHR",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dc27bf5d-5e9d-4034-bc64-0d6c16442947",
        "sizeRangeCode": "M03: 8: XS-XL, M-XL TALL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XL, M-XL TALL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            }
        ],
        "displayValue": "M03: 8: XS-XL, M-XL TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a6947062-f3aa-42bf-bc3f-2592aee33061",
        "sizeRangeCode": "M03: 8: XXS/P,XS/P,S/P,M/P,L/P,XL/P,XXL/P,32A-C",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/P,XS/P,S/P,M/P,L/P,XL/P,XXL/P,32A-C",
        "sizeList": [
            {
                "id": "0e40bb4d-fec1-439e-95cc-41632a6618da"
            },
            {
                "id": "6d4d2e0c-08df-4863-8f3e-7de2a8921b00"
            },
            {
                "id": "775dd9d5-cc1a-493b-bc21-d6d1191457ed"
            },
            {
                "id": "7867d3fc-1e28-4d0a-af88-563539c598c1"
            },
            {
                "id": "89002406-0806-432a-8a28-d0ce878bf653"
            },
            {
                "id": "8abb8563-4b8e-426c-ad0f-2b04df94fd0e"
            },
            {
                "id": "94831da0-643b-456d-8095-d9dfcf2ad4f9"
            },
            {
                "id": "b53f738d-5a55-4f76-851f-8ef2cd09e4ee"
            }
        ],
        "displayValue": "M03: 8: XXS/P,XS/P,S/P,M/P,L/P,XL/P,XXL/P,32A-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1b89dafe-4e34-48b0-81ec-e8e1eee76037",
        "sizeRangeCode": "M03: 8: XXS/T,XS/T,S/T,M/T,L/T,XL/T,XXL/T,XXXL/T",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XXS/T,XS/T,S/T,M/T,L/T,XL/T,XXL/T,XXXL/T",
        "sizeList": [
            {
                "id": "0978c7c4-5f49-4348-ac1c-84de1c5733d7"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "982fce26-ec8c-4828-9759-a47ce8355565"
            },
            {
                "id": "b4caaeb9-2bb9-498b-81a3-47986e023810"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            },
            {
                "id": "f41adbbc-2e85-402d-b493-290ae294d325"
            },
            {
                "id": "fe33eed5-f206-44a3-8603-5f9958b28ac0"
            }
        ],
        "displayValue": "M03: 8: XXS/T,XS/T,S/T,M/T,L/T,XL/T,XXL/T,XXXL/T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1a23f0e0-79ad-4d25-8e8a-3287129d2517",
        "sizeRangeCode": "M03: 9: REG XS - XXL, PLUS L - XXL",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "REG XS - XXL, PLUS L - XXL",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "6e391f66-7877-4a17-85ab-2a96a462c6ed"
            },
            {
                "id": "75a55ff3-536e-492e-ae3c-b8e1892911d9"
            },
            {
                "id": "7f9c7959-961b-4cae-ae1e-1507a00995e2"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            }
        ],
        "displayValue": "M03: 9: REG XS - XXL, PLUS L - XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5177e4a1-5b78-47a4-bc27-3de4bf11fbc6",
        "sizeRangeCode": "M03: 9: XS-XXL, M-XL Tall",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXL, M-XL Tall",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c0ac2be7-7c04-4848-9194-648df59a3516"
            }
        ],
        "displayValue": "M03: 9: XS-XXL, M-XL Tall",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ea952f93-7ac8-458d-9654-a4d9ffc5ca81",
        "sizeRangeCode": "M03: 9: XS-XXXL, L Tall-XL Tall",
        "sizeModelId": "04f636d4-3a35-4132-9eed-66c7d8ab8396",
        "description": "XS-XXXL, L Tall-XL Tall",
        "sizeList": [
            {
                "id": "132b6c84-4ca5-4b40-907e-9fa2892b2dd2"
            },
            {
                "id": "1fd7ad33-f7ae-42bb-bfd7-b4238b9a8a69"
            },
            {
                "id": "25cf71e1-4ce8-4ea3-9064-a3b804d840c1"
            },
            {
                "id": "2f41843b-8523-42c6-b108-662b34c00e5d"
            },
            {
                "id": "55574985-0701-44ca-b035-9f7d1a2506ab"
            },
            {
                "id": "8bec9883-ad19-45fc-8922-f5125c1b5ebd"
            },
            {
                "id": "9d1c8c87-84a0-4934-ba76-6196670fd8ae"
            },
            {
                "id": "be03f453-7578-48a1-a536-1715b54aa09b"
            },
            {
                "id": "c7a85c32-5f47-43eb-97ec-659b19342a2e"
            }
        ],
        "displayValue": "M03: 9: XS-XXXL, L Tall-XL Tall",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cf71d912-a1cf-44ba-9b29-1e964bb871b9",
        "sizeRangeCode": "M04: 4: S-XL",
        "sizeModelId": "830d06bd-3451-47ad-ad25-2d86f0303483",
        "description": "S-XL",
        "sizeList": [
            {
                "id": "18482e4c-c05e-4711-9bab-804fa097dfad"
            },
            {
                "id": "32f19d81-78b4-4ec9-b306-1400f427f645"
            },
            {
                "id": "7e1e9a32-343f-400d-9805-962efd85009a"
            },
            {
                "id": "a028dc6d-72a5-48f8-a04b-3f607698bbae"
            }
        ],
        "displayValue": "M04: 4: S-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "149e9c26-b57b-4e43-80e9-ff6e1aa05e3c",
        "sizeRangeCode": "M05: 15: XS-XL, Ankle, Regular, Long ",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS-XL, Ankle, Regular, Long ",
        "sizeList": [
            {
                "id": "12448a24-eab1-4078-829f-5c550e7086f5"
            },
            {
                "id": "1786614c-a5ca-4ce1-854e-0ebe02a55f17"
            },
            {
                "id": "2ec8aa32-c13f-480b-bcf7-cb2818b0e4e0"
            },
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "743778ad-588a-47ef-83eb-d8e4696ee47a"
            },
            {
                "id": "9017ba1d-df40-4b15-989e-33af16f5f033"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b07ada9c-2d44-40e5-bcbc-bc25772c3e32"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            },
            {
                "id": "b984a304-e324-4965-8a04-d481389f80fa"
            },
            {
                "id": "cc104d26-a2be-452f-8b20-e7d27d335efe"
            },
            {
                "id": "f164dece-2966-40b7-a5ed-86a9e805eb7f"
            },
            {
                "id": "f7573292-7496-4980-88ff-42724cfb4db5"
            }
        ],
        "displayValue": "M05: 15: XS-XL, Ankle, Regular, Long ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cedcffc9-f5cf-4092-ab36-c89a11292072",
        "sizeRangeCode": "M05: 4: XS-L REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS-L REG",
        "sizeList": [
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            }
        ],
        "displayValue": "M05: 4: XS-L REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "744082d4-3d77-4b0e-bfbe-89cc02c43ef2",
        "sizeRangeCode": "M05: 5: XS REG-XL REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS REG-XL REG",
        "sizeList": [
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            }
        ],
        "displayValue": "M05: 5: XS REG-XL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "78e1c42c-6d18-45f2-ab13-6db994ce752f",
        "sizeRangeCode": "M05: 5: XS-XL REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS-XL REG",
        "sizeList": [
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            }
        ],
        "displayValue": "M05: 5: XS-XL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fdcfed25-1d8e-429b-8b8d-b30b18aed0d7",
        "sizeRangeCode": "M05: 5: XXS REG-L REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XXS REG-L REG",
        "sizeList": [
            {
                "id": "206de754-5555-418c-a2d5-7d2ee6335934"
            },
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            }
        ],
        "displayValue": "M05: 5: XXS REG-L REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a4f1f81a-c0da-45a2-ae47-d28ded194525",
        "sizeRangeCode": "M05: 6: XS,S,M,L,XL,XXL",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS,S,M,L,XL,XXL",
        "sizeList": [
            {
                "id": "08235e36-56fa-40cb-b357-a86b62b49004"
            },
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            }
        ],
        "displayValue": "M05: 6: XS,S,M,L,XL,XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9fd6fce5-4311-47ef-ad3c-6c462a69ce61",
        "sizeRangeCode": "M05: 6: XS-M ANK, XS-M REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XS-M ANK, XS-M REG",
        "sizeList": [
            {
                "id": "2ec8aa32-c13f-480b-bcf7-cb2818b0e4e0"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b984a304-e324-4965-8a04-d481389f80fa"
            },
            {
                "id": "f164dece-2966-40b7-a5ed-86a9e805eb7f"
            }
        ],
        "displayValue": "M05: 6: XS-M ANK, XS-M REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2919f5c-a5d8-4fbf-82da-4ced3382ec2e",
        "sizeRangeCode": "M05: 6: XXS REG-XL REG",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "XXS REG-XL REG",
        "sizeList": [
            {
                "id": "206de754-5555-418c-a2d5-7d2ee6335934"
            },
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            }
        ],
        "displayValue": "M05: 6: XXS REG-XL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c1c04952-61b8-4a4c-a21e-f345c77d8c40",
        "sizeRangeCode": "M05: 7: M05 ALL",
        "sizeModelId": "6744e4c4-b24c-457b-85d5-41bae54ac426",
        "description": "M05 ALL",
        "sizeList": [
            {
                "id": "08235e36-56fa-40cb-b357-a86b62b49004"
            },
            {
                "id": "206de754-5555-418c-a2d5-7d2ee6335934"
            },
            {
                "id": "5666f956-4ad7-4f19-abd9-e443ec954987"
            },
            {
                "id": "66e7afc5-4ba2-4481-95c2-1252c3bef485"
            },
            {
                "id": "674e8192-a3c0-49ae-90a9-2c418988b8a6"
            },
            {
                "id": "92b4ea92-ce38-404c-b419-baaaebb9e167"
            },
            {
                "id": "b283d9d9-b002-4000-93a6-0d2f75c9910b"
            }
        ],
        "displayValue": "M05: 7: M05 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "373e8bbc-3c62-40ad-b3f0-ab93e8b9f84f",
        "sizeRangeCode": "M07: 10: XS-XL, XS Slim-XL Slim",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XL, XS Slim-XL Slim",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 10: XS-XL, XS Slim-XL Slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2e1e29c-f176-4ac7-81e2-9c510687e656",
        "sizeRangeCode": "M07: 10: XS-XL, XS Slim-XL Slim",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XL, XS Slim-XL Slim",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 10: XS-XL, XS Slim-XL Slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "132bbdcc-3183-4916-8953-922f2f9190c6",
        "sizeRangeCode": "M07: 10: XS-XXL Reg, M-XXL Husky",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXL Reg, M-XXL Husky",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "61d7f1b7-017d-438e-862c-158848d4f2bb"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 10: XS-XXL Reg, M-XXL Husky",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8df5f6ab-1d60-40f2-8cd9-d53963f98d66",
        "sizeRangeCode": "M07: 10: XS-XXL, M Husky-XXL Husky",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXL, M Husky-XXL Husky",
        "sizeList": [
            {
                "id": "01cf5fcf-8edd-4754-8c90-e4f2b27fad67"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "61d7f1b7-017d-438e-862c-158848d4f2bb"
            },
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "8c5502e9-463b-4b81-8802-67d9a3a10ec4"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 10: XS-XXL, M Husky-XXL Husky",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "64d06e4b-2031-4573-bdd9-ca2c56308e95",
        "sizeRangeCode": "M07: 10: XS-XXXL, M TALL-XL TALL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXXL, M TALL-XL TALL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 10: XS-XXXL, M TALL-XL TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "512d4c4b-7c0c-4dd1-b599-3437d39665e4",
        "sizeRangeCode": "M07: 10: XS-XXXL; M TALL-XL TALL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXXL; M TALL-XL TALL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 10: XS-XXXL; M TALL-XL TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9f85058d-5eae-4fb7-995e-61c40b2845d3",
        "sizeRangeCode": "M07: 11: XS,S,M,L,XL,XXL,XXXL,LHUSKY,XLHUSKY,XXLHUSKY,XXXLHUSKY",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS,S,M,L,XL,XXL,XXXL,LHUSKY,XLHUSKY,XXLHUSKY,XXXLHUSKY",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "6682b424-b2fb-44cb-987b-63dd67fdd3a1"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 11: XS,S,M,L,XL,XXL,XXXL,LHUSKY,XLHUSKY,XXLHUSKY,XXXLHUSKY",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1ed791a6-121f-4524-840d-4b9507742834",
        "sizeRangeCode": "M07: 12: XS-XXL, XS-XXL SLIM",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXL, XS-XXL SLIM",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9bc1352f-c439-4043-83d2-3ad5b984f932"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 12: XS-XXL, XS-XXL SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "36b9af30-a74b-4850-b84d-97d2e2e27842",
        "sizeRangeCode": "M07: 15: 1104-0401",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "1104-0401",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 15: 1104-0401",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "99f5651f-2d6d-416f-80ad-c47c9fe94058",
        "sizeRangeCode": "M07: 16: M HUSKY-XXL HUSKY, XS REG-XXL REG, XS-XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "M HUSKY-XXL HUSKY, XS REG-XXL REG, XS-XXL",
        "sizeList": [
            {
                "id": "01cf5fcf-8edd-4754-8c90-e4f2b27fad67"
            },
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "61d7f1b7-017d-438e-862c-158848d4f2bb"
            },
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "8c5502e9-463b-4b81-8802-67d9a3a10ec4"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 16: M HUSKY-XXL HUSKY, XS REG-XXL REG, XS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "57fdc521-4522-4d3f-93e2-b5397e9d972b",
        "sizeRangeCode": "M07: 18: XS-XXXL, M TALL-XL TALL, XS SLIM-XL SLIM, M SLIM TALL-XL SLIM TALL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXXL, M TALL-XL TALL, XS SLIM-XL SLIM, M SLIM TALL-XL SLIM TALL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "5795e378-cbd8-4b26-941e-cfbd95fb4118"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "dc5291e8-6a59-451c-b389-ed0c99881e58"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            },
            {
                "id": "fd0ceb78-4e46-4066-834a-a4d306c8876f"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 18: XS-XXXL, M TALL-XL TALL, XS SLIM-XL SLIM, M SLIM TALL-XL SLIM TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "33c6bd68-05e6-46db-addc-631a1c6f35db",
        "sizeRangeCode": "M07: 18: XS-XXXL; M TALL-XL TALL; XS SLIM-XL SLIM; M SLIM TALL-XL SLIM TALL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXXL; M TALL-XL TALL; XS SLIM-XL SLIM; M SLIM TALL-XL SLIM TALL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "5795e378-cbd8-4b26-941e-cfbd95fb4118"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "dc5291e8-6a59-451c-b389-ed0c99881e58"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            },
            {
                "id": "fd0ceb78-4e46-4066-834a-a4d306c8876f"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 18: XS-XXXL; M TALL-XL TALL; XS SLIM-XL SLIM; M SLIM TALL-XL SLIM TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "02559263-4a61-4df8-a05c-a8b15df9cc2f",
        "sizeRangeCode": "M07: 4: 0101-0401",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "0101-0401",
        "sizeList": [
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 4: 0101-0401",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "76aae98e-a9ca-4c24-a579-f0d49b11ca2f",
        "sizeRangeCode": "M07: 4: M,L,XL,XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "M,L,XL,XXL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            }
        ],
        "displayValue": "M07: 4: M,L,XL,XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "071c5d6d-f4c2-4575-a066-d6e6f919362b",
        "sizeRangeCode": "M07: 4: M-XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "M-XXL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            }
        ],
        "displayValue": "M07: 4: M-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d3ad6b18-49d9-4da3-89e1-6e492e1597f2",
        "sizeRangeCode": "M07: 4: S-XL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S-XL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            }
        ],
        "displayValue": "M07: 4: S-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ec14d399-b798-467a-ad4e-8ca3faa04758",
        "sizeRangeCode": "M07: 4: S-XL REG",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S-XL REG",
        "sizeList": [
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 4: S-XL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e645002f-d8cf-496b-94df-892c8ac3a6ba",
        "sizeRangeCode": "M07: 4: XS-L",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-L",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 4: XS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "219b0f27-3a3d-4079-9c57-a7f82d626b8a",
        "sizeRangeCode": "M07: 5: M,L,XL,XXL,XXXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "M,L,XL,XXL,XXXL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            }
        ],
        "displayValue": "M07: 5: M,L,XL,XXL,XXXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1b284603-45fe-402d-a65a-89546538554e",
        "sizeRangeCode": "M07: 5: S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "sizeList": [
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "9bc1352f-c439-4043-83d2-3ad5b984f932"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 5: S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "12a2f8df-bad3-45bf-a0ed-b30e9ec710d7",
        "sizeRangeCode": "M07: 5: S-XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S-XXL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            }
        ],
        "displayValue": "M07: 5: S-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "06613926-0817-450b-86c2-d8cf91656403",
        "sizeRangeCode": "M07: 5: XS SLIM-XL SLIM",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS SLIM-XL SLIM",
        "sizeList": [
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 5: XS SLIM-XL SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "822216fa-b739-458f-98a2-68a149fedade",
        "sizeRangeCode": "M07: 5: XS-XL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 5: XS-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fe1f080c-05e4-49e8-adf0-ffcaaf965349",
        "sizeRangeCode": "M07: 6: XS REG-XXL REG",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS REG-XXL REG",
        "sizeList": [
            {
                "id": "01cf5fcf-8edd-4754-8c90-e4f2b27fad67"
            },
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "8c5502e9-463b-4b81-8802-67d9a3a10ec4"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 6: XS REG-XXL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3857a099-fc89-4810-9399-e19e2d3d21b8",
        "sizeRangeCode": "M07: 6: XS SLIM, S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS SLIM, S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "sizeList": [
            {
                "id": "360ab39e-fab5-4172-b6b5-f19bfb184828"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "9bc1352f-c439-4043-83d2-3ad5b984f932"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 6: XS SLIM, S SLIM, M SLIM, L SLIM, XL SLIM, XXL SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5b8b7d76-a01b-4556-8f22-dcee2596a774",
        "sizeRangeCode": "M07: 6: XS-XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXL",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 6: XS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "98c9d373-2c11-475f-bde5-7137675d0f47",
        "sizeRangeCode": "M07: 6: XS-XXL REG",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS-XXL REG",
        "sizeList": [
            {
                "id": "01cf5fcf-8edd-4754-8c90-e4f2b27fad67"
            },
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "8c5502e9-463b-4b81-8802-67d9a3a10ec4"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 6: XS-XXL REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "665aa1a1-6eb0-41b2-ab38-34e731808a96",
        "sizeRangeCode": "M07: 7: Boys US ONL Husky",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "Boys US ONL Husky",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            }
        ],
        "displayValue": "M07: 7: Boys US ONL Husky",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "772b3443-5a7e-42ae-9fb9-0c0f530267df",
        "sizeRangeCode": "M07: 8: S-XL, S Slim-XL Slim",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S-XL, S Slim-XL Slim",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 8: S-XL, S Slim-XL Slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8a9fca1b-cfd4-4ad1-9653-417d7c754ac0",
        "sizeRangeCode": "M07: 8: S-XL, S Slim-XL Slim",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "S-XL, S Slim-XL Slim",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "3da4cecc-c6e9-426c-a06d-b9f145090d89"
            },
            {
                "id": "4972b097-ce5b-460c-b0ca-d3df6e7a1689"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "9d344a00-b911-40ff-ae26-7848b5949290"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f66de12e-457b-4780-8332-fb1e300efe0f"
            }
        ],
        "displayValue": "M07: 8: S-XL, S Slim-XL Slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "98349562-5de8-4847-a754-3c2d3a340c9c",
        "sizeRangeCode": "M07: 9: 2T,3T,4T,5T,6,8,10,12,14",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "2T,3T,4T,5T,6,8,10,12,14",
        "sizeList": [
            {
                "id": "394ddd81-dcde-4e0c-b78d-c031bb360c14"
            },
            {
                "id": "4c6fc310-e874-4db4-8904-ded92ea53159"
            },
            {
                "id": "543bba1c-c322-4556-bdcc-75d7690d3561"
            },
            {
                "id": "5795e378-cbd8-4b26-941e-cfbd95fb4118"
            },
            {
                "id": "6b1e4175-c974-4c77-9720-4b2a4a5428e9"
            },
            {
                "id": "dc5291e8-6a59-451c-b389-ed0c99881e58"
            },
            {
                "id": "e43d0fac-d45b-44ca-aa0f-0cc60da66b08"
            },
            {
                "id": "fd0ceb78-4e46-4066-834a-a4d306c8876f"
            },
            {
                "id": "fe13f884-8ac1-4d6d-ac91-4f5b7b2ed41c"
            }
        ],
        "displayValue": "M07: 9: 2T,3T,4T,5T,6,8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d5be75a0-4318-46e6-8d0d-e3663eaa224f",
        "sizeRangeCode": "M07: 9: REG XS - XXL, HUSKY L - XXL",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "REG XS - XXL, HUSKY L - XXL",
        "sizeList": [
            {
                "id": "01cf5fcf-8edd-4754-8c90-e4f2b27fad67"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "7b8ae590-2519-4a20-9d92-878d1cd2d83f"
            },
            {
                "id": "8c5502e9-463b-4b81-8802-67d9a3a10ec4"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ba11584c-85af-40a7-9492-1711f5fa9297"
            },
            {
                "id": "f82db025-595b-415e-8dfb-dc99837f4e61"
            },
            {
                "id": "f91be8cd-2d35-4228-8c4f-f2ab1f24f5a3"
            }
        ],
        "displayValue": "M07: 9: REG XS - XXL, HUSKY L - XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cd776ef3-96a4-4590-a984-a02369542853",
        "sizeRangeCode": "M07: 9: XS,S,M,L,XL,XXL,LHUSKY,XLHUSKY,XXLHUSKY",
        "sizeModelId": "cdde5eae-00af-4847-b7ae-90d8e18b3dd1",
        "description": "XS,S,M,L,XL,XXL,LHUSKY,XLHUSKY,XXLHUSKY",
        "sizeList": [
            {
                "id": "1f4729cc-00bb-46cb-9d22-3647061a1d17"
            },
            {
                "id": "2c2bfbb8-ec8c-4cf7-be0f-50f4d79a8011"
            },
            {
                "id": "91dbcee8-4fa9-4f66-80fd-4748448b2882"
            },
            {
                "id": "961d500c-4741-4fde-8770-65cd9f02124f"
            },
            {
                "id": "9de60b92-d7de-4a1f-a6cd-758e4c1b8efe"
            },
            {
                "id": "b60a1232-4f48-4d0e-a86a-5fa816fa52da"
            },
            {
                "id": "ca7b95fc-bb8a-4a37-bc4b-d311af7d220b"
            },
            {
                "id": "cbde4b97-6d89-4cf6-906a-24542c1d4e47"
            },
            {
                "id": "f43ceac8-0377-4cec-b184-ac3c5aa8ac31"
            }
        ],
        "displayValue": "M07: 9: XS,S,M,L,XL,XXL,LHUSKY,XLHUSKY,XXLHUSKY",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e0ef1b83-db05-4187-92ab-fbc31af0e869",
        "sizeRangeCode": "M08: 5: S-XXL",
        "sizeModelId": "d90021f4-1f95-4e95-b512-be84d6c4b581",
        "description": "S-XXL",
        "sizeList": [
            {
                "id": "07d639d9-66b8-4bb4-bd73-1f03a9202839"
            },
            {
                "id": "a68177b3-2e6d-4664-bf32-720ad1ed557e"
            },
            {
                "id": "b216be03-0894-4e0c-a382-6c44fd36623f"
            },
            {
                "id": "f1fa26b8-4090-4e9d-9ae9-322b61bea361"
            },
            {
                "id": "f2a4134e-0e2d-4494-8c29-c06d6d69c938"
            }
        ],
        "displayValue": "M08: 5: S-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cb6dfb54-a62d-4c0c-937f-7f29148ebeab",
        "sizeRangeCode": "M08: 6: XS-XXL",
        "sizeModelId": "d90021f4-1f95-4e95-b512-be84d6c4b581",
        "description": "XS-XXL",
        "sizeList": [
            {
                "id": "07d639d9-66b8-4bb4-bd73-1f03a9202839"
            },
            {
                "id": "51c1a259-b706-478f-a08c-03345c3300a7"
            },
            {
                "id": "a68177b3-2e6d-4664-bf32-720ad1ed557e"
            },
            {
                "id": "b216be03-0894-4e0c-a382-6c44fd36623f"
            },
            {
                "id": "f1fa26b8-4090-4e9d-9ae9-322b61bea361"
            },
            {
                "id": "f2a4134e-0e2d-4494-8c29-c06d6d69c938"
            }
        ],
        "displayValue": "M08: 6: XS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d17e74cb-839f-457a-8dbc-755f78bf6619",
        "sizeRangeCode": "M21: 10: 24REG,25REG,26REG,27REG,28REG,29REG,30REG,31REG,32REG,33REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,25REG,26REG,27REG,28REG,29REG,30REG,31REG,32REG,33REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 10: 24REG,25REG,26REG,27REG,28REG,29REG,30REG,31REG,32REG,33REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cff1647e-aefa-4911-8883-05dc50285b6d",
        "sizeRangeCode": "M21: 10: 25REG, 26REG, 27REG, 28REG, 29REG, 30REG, 31REG, 32REG, 33REG, 34REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "25REG, 26REG, 27REG, 28REG, 29REG, 30REG, 31REG, 32REG, 33REG, 34REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 10: 25REG, 26REG, 27REG, 28REG, 29REG, 30REG, 31REG, 32REG, 33REG, 34REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "54f27ab3-de1b-42d5-bfb1-4f27c807a9fe",
        "sizeRangeCode": "M21: 11: 24REG-34REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG-34REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 11: 24REG-34REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bb4a32ff-ebfe-4ca6-8931-9e76fc054b54",
        "sizeRangeCode": "M21: 11: M21: 11 25REG-35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "M21: 11 25REG-35REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 11: M21: 11 25REG-35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1c89343c-cd2c-4036-a176-ab7a90442f59",
        "sizeRangeCode": "M21: 12: 24,25,26,27,28,29,30,31,32,33,34,35",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24,25,26,27,28,29,30,31,32,33,34,35",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 12: 24,25,26,27,28,29,30,31,32,33,34,35",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "123cd87b-4da3-413e-83b2-d31a75f2f526",
        "sizeRangeCode": "M21: 14: 23J REG-29J REG 23P-29P",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23J REG-29J REG 23P-29P",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "4f13725d-2172-4ba9-8a2f-0a91f69757e4"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 14: 23J REG-29J REG 23P-29P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6abd5dad-6b3f-4e19-a141-a6393d0fb101",
        "sizeRangeCode": "M21: 15: 24 REG- 33 REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24 REG- 33 REG",
        "sizeList": [
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 15: 24 REG- 33 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9728b44b-05ab-4d87-8979-fec441320a8d",
        "sizeRangeCode": "M21: 15: 24REG,25REG,26SHORT, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 33REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,25REG,26SHORT, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 33REG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            }
        ],
        "displayValue": "M21: 15: 24REG,25REG,26SHORT, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 33REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f5f152d1-a700-4691-8136-578ca2aa50a4",
        "sizeRangeCode": "M21: 15: 24reg,25short,25reg,26short,26reg,27short,27reg,28short,28reg,28long,30short,30reg,30long,32reg,33reg",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24reg,25short,25reg,26short,26reg,27short,27reg,28short,28reg,28long,30short,30reg,30long,32reg,33reg",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "38ce2853-5c05-4d88-84bc-ced74e81e608"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            }
        ],
        "displayValue": "M21: 15: 24reg,25short,25reg,26short,26reg,27short,27reg,28short,28reg,28long,30short,30reg,30long,32reg,33reg",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1ad9808f-21df-4383-a90c-c55d18fc18b6",
        "sizeRangeCode": "M21: 15: 25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            }
        ],
        "displayValue": "M21: 15: 25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a3516e0f-e024-414a-99bf-8b7ceb796307",
        "sizeRangeCode": "M21: 17: 24 REG,25 SHORT,25 REG,26 SHORT,26 REG,27 SHORT,27 REG,28 SHORT,28 REG,29 SHORT,29 REG,30 SHORT,30 REG,31 REG,32 REG,33 REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24 REG,25 SHORT,25 REG,26 SHORT,26 REG,27 SHORT,27 REG,28 SHORT,28 REG,29 SHORT,29 REG,30 SHORT,30 REG,31 REG,32 REG,33 REG",
        "sizeList": [
            {
                "id": "38ce2853-5c05-4d88-84bc-ced74e81e608"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 17: 24 REG,25 SHORT,25 REG,26 SHORT,26 REG,27 SHORT,27 REG,28 SHORT,28 REG,29 SHORT,29 REG,30 SHORT,30 REG,31 REG,32 REG,33 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dca59d2a-dcdc-45d8-803d-6648a099daa4",
        "sizeRangeCode": "M21: 17: M21 ALL",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "M21 ALL",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c077ead-816f-4ca7-8241-8212c97e4549"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 17: M21 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5f52e058-b2c8-4b71-ab45-a9e48d6a1173",
        "sizeRangeCode": "M21: 18: M21 ALL",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "M21 ALL",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c077ead-816f-4ca7-8241-8212c97e4549"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "b0e90edf-706c-4427-b659-bc82b30ff19b"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 18: M21 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ce94ba3a-53cd-4e98-94f9-8abb5a8cff26",
        "sizeRangeCode": "M21: 19: 24REG;25SHORT;25REG:26SHORT;26REG;27SHORT;27REG;27LONG;28SHORT;28REG;28LONG;29SHORT;29REG;29LONG;30SHORT;30REG;30LONG;32REG;33REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG;25SHORT;25REG:26SHORT;26REG;27SHORT;27REG;27LONG;28SHORT;28REG;28LONG;29SHORT;29REG;29LONG;30SHORT;30REG;30LONG;32REG;33REG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "38ce2853-5c05-4d88-84bc-ced74e81e608"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            }
        ],
        "displayValue": "M21: 19: 24REG;25SHORT;25REG:26SHORT;26REG;27SHORT;27REG;27LONG;28SHORT;28REG;28LONG;29SHORT;29REG;29LONG;30SHORT;30REG;30LONG;32REG;33REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f12b9690-d30c-4db4-830c-091b6c2ccfdb",
        "sizeRangeCode": "M21: 22: 24REG,25SHORT,25REG,26SHORT,26REG,27SHORT,27REG,27LONG,28SHORT,28REG,28LONG,29SHORT,29REG,29LONG,30SHORT,30REG,30LONG,31SHORT,31REG,31LONG,32REG,33REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,25SHORT,25REG,26SHORT,26REG,27SHORT,27REG,27LONG,28SHORT,28REG,28LONG,29SHORT,29REG,29LONG,30SHORT,30REG,30LONG,31SHORT,31REG,31LONG,32REG,33REG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "38ce2853-5c05-4d88-84bc-ced74e81e608"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            }
        ],
        "displayValue": "M21: 22: 24REG,25SHORT,25REG,26SHORT,26REG,27SHORT,27REG,27LONG,28SHORT,28REG,28LONG,29SHORT,29REG,29LONG,30SHORT,30REG,30LONG,31SHORT,31REG,31LONG,32REG,33REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5514c7cf-13cb-45fa-8148-9dd44aabac55",
        "sizeRangeCode": "M21: 24: 24REG-35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG-35REG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "38ce2853-5c05-4d88-84bc-ced74e81e608"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            }
        ],
        "displayValue": "M21: 24: 24REG-35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2359614f-abd7-42b6-aa15-d461556b8e51",
        "sizeRangeCode": "M21: 24: EU OL WOMENS DENIM BOTTOMS EXTENDED SIZING",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "EU OL WOMENS DENIM BOTTOMS EXTENDED SIZING",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "2022fc4d-6d86-40cf-8c36-a9b971b9ff6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 24: EU OL WOMENS DENIM BOTTOMS EXTENDED SIZING",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "34de4409-0ef0-4f8b-9024-d747bc1a5b1f",
        "sizeRangeCode": "M21: 26: 24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 26: 24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c3f7d143-8f32-4141-8a11-d17c4f205804",
        "sizeRangeCode": "M21: 26: 25-34REG, 26-33SHORT, 26-33LONG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "25-34REG, 26-33SHORT, 26-33LONG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ecd7d19-8cb5-4a6c-9a59-9934464f7d94"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            }
        ],
        "displayValue": "M21: 26: 25-34REG, 26-33SHORT, 26-33LONG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "173ac72d-ef6d-41e3-bef5-50bb55e544f2",
        "sizeRangeCode": "M21: 28: 23P,23REG,24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23P,23REG,24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "4f13725d-2172-4ba9-8a2f-0a91f69757e4"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 28: 23P,23REG,24REG,24P,25REG,25P,26REG,26P,27REG,27TALL,27P,28REG,28TALL,28P,29REG,29TALL,29P,30REG,30TALL,30P,31REG,31TALL,32REG,32TALL,33REG,33TALL,34REG,35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a0f99497-2a76-4b93-8ea1-75c13a3929aa",
        "sizeRangeCode": "M21: 28: 24-35REG, 26-33SHORT, 26-33LONG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24-35REG, 26-33SHORT, 26-33LONG",
        "sizeList": [
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ecd7d19-8cb5-4a6c-9a59-9934464f7d94"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            }
        ],
        "displayValue": "M21: 28: 24-35REG, 26-33SHORT, 26-33LONG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2f065ccc-3931-4d35-99ec-77561ce89340",
        "sizeRangeCode": "M21: 39: XL - M2126",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "XL - M2126",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 39: XL - M2126",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "02e288ba-c3cc-4e49-8fd9-88c50ae614d5",
        "sizeRangeCode": "M21: 42: 24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ecd7d19-8cb5-4a6c-9a59-9934464f7d94"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 42: 24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6c9781e5-477c-449e-a2b3-979fb05197c7",
        "sizeRangeCode": "M21: 44: 23P,23REG,24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23P,23REG,24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "4f13725d-2172-4ba9-8a2f-0a91f69757e4"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ecd7d19-8cb5-4a6c-9a59-9934464f7d94"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 44: 23P,23REG,24REG,24P,25REG,25P,26SHORT,26REG,26LONG,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,32SHORT,32REG,32LONG,32TALL,33SHORT,33REG,33LONG,33TALL,34REG,35REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4fd32398-bf0c-495c-befd-cfc681eafaa0",
        "sizeRangeCode": "M21: 52: 24REG,24TALL,24P,25REG,25TALL,25P,26SHORT,26REG,26LONG,26TALL,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,31P,32SHORT,32REG,32LONG,32TALL,32P,33SHORT,33REG,33LONG,33TALL,33P,34REG,34TALL,34P,35REG,35TALL,35P",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,24TALL,24P,25REG,25TALL,25P,26SHORT,26REG,26LONG,26TALL,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,31P,32SHORT,32REG,32LONG,32TALL,32P,33SHORT,33REG,33LONG,33TALL,33P,34REG,34TALL,34P,35REG,35TALL,35P",
        "sizeList": [
            {
                "id": "060ab347-8193-416a-80b0-c8e764312d8f"
            },
            {
                "id": "0a8a21cf-d804-46aa-ab29-3cec0e31ec80"
            },
            {
                "id": "0aa55a9d-53eb-40e8-afc3-47f8f2bd2ce8"
            },
            {
                "id": "118a3a69-4170-4eb7-8206-22900b26a8ec"
            },
            {
                "id": "2022fc4d-6d86-40cf-8c36-a9b971b9ff6f"
            },
            {
                "id": "20638fcf-f1fe-4565-8952-da4c61be12cc"
            },
            {
                "id": "2152d9de-9485-43ab-b81b-0f7579c56a6f"
            },
            {
                "id": "2c201dc8-f0a5-4d74-ab5b-68a9822d2e26"
            },
            {
                "id": "3353ce95-f282-4dc8-a90e-13479b913b80"
            },
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "3fc2db53-c200-482d-8ac5-e04b52df53a5"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "4424357d-3797-4d7d-8e0d-c232c9c18ae2"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "575a14cf-0fb1-4213-b0c4-c552b1460354"
            },
            {
                "id": "5ecd7d19-8cb5-4a6c-9a59-9934464f7d94"
            },
            {
                "id": "5ff76878-a4b2-45cf-be18-693ac5096817"
            },
            {
                "id": "60d95e1a-d3b9-4e1e-9d8d-3195d73c7f57"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "7e0b256f-afe1-4585-bb5d-a960d0655b17"
            },
            {
                "id": "7e6198ba-4908-40f8-8fd2-0ebfb8c1d8d5"
            },
            {
                "id": "7fe89bbe-5b40-435c-8917-b98fe85e40f3"
            },
            {
                "id": "808090ea-0850-4518-b1a6-23d065ba5fdf"
            },
            {
                "id": "816566d6-a266-491e-8a9c-464457a1a777"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "8f133540-33d9-4287-ab5d-ef40b10f8f03"
            },
            {
                "id": "9d41ee59-0e8c-4287-a95d-690164708d61"
            },
            {
                "id": "a16854a6-da07-43af-86d8-ae6bd9be10be"
            },
            {
                "id": "a5e82b81-3a80-4309-82b4-2ae920fb5a88"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "aede24cd-bd59-4092-af28-ddeddedc6d56"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b361527c-5fcc-4e40-a2e5-876b65b07f24"
            },
            {
                "id": "b622a90f-3ab3-4dd3-9f39-5aa7d818d20b"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "b85cb58e-6931-47d0-a8a1-19a121ef2e11"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "be10dc61-8c80-4861-a690-df591fe62445"
            },
            {
                "id": "c825e41d-556b-4c3d-b581-438ef8516f49"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "c9af0439-55e8-4258-a6ca-25a1a30bf3fe"
            },
            {
                "id": "cc3deb8f-3444-4c24-9c7d-a850bac4bd29"
            },
            {
                "id": "d9e67aed-c066-435a-aeb9-57756f0d21ef"
            },
            {
                "id": "d9fa7945-b8ce-4185-993d-fabdaa1ea6b0"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "e0580b09-9e64-42c4-95a6-2644eb45d33c"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            },
            {
                "id": "e5eb489c-b751-4022-8b0d-01c23fd1e89e"
            },
            {
                "id": "e77fa767-38df-4391-8b9e-951565a2ca02"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 52: 24REG,24TALL,24P,25REG,25TALL,25P,26SHORT,26REG,26LONG,26TALL,26P,27SHORT,27REG,27LONG,27TALL,27P,28SHORT,28REG,28LONG,28TALL,28P,29SHORT,29REG,29LONG,29TALL,29P,30SHORT,30REG,30LONG,30TALL,30P,31SHORT,31REG,31LONG,31TALL,31P,32SHORT,32REG,32LONG,32TALL,32P,33SHORT,33REG,33LONG,33TALL,33P,34REG,34TALL,34P,35REG,35TALL,35P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8405c911-2533-47a3-9ae1-8e8715edb24c",
        "sizeRangeCode": "M21: 5: 23JREG,24JREG,25JREG,26JREG,27JREG,28JREG,29JREG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23JREG,24JREG,25JREG,26JREG,27JREG,28JREG,29JREG",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            }
        ],
        "displayValue": "M21: 5: 23JREG,24JREG,25JREG,26JREG,27JREG,28JREG,29JREG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c258500a-aff4-4f62-85e6-115cbcb82435",
        "sizeRangeCode": "M21: 6: 24REG,25REG,26REG,28REG,30REG,32REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,25REG,26REG,28REG,30REG,32REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            }
        ],
        "displayValue": "M21: 6: 24REG,25REG,26REG,28REG,30REG,32REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "81b75aff-a37f-4b98-b67b-ac95966e0b91",
        "sizeRangeCode": "M21: 6: 2602,2702,2802,2902,3002,3102",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "2602,2702,2802,2902,3002,3102",
        "sizeList": [
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 6: 2602,2702,2802,2902,3002,3102",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e8fe8c67-413e-48ad-bc6c-be52e5d48e21",
        "sizeRangeCode": "M21: 7: 23J REG,24J REG,25J REG,26 JREG,27J REG,28J REG,29J REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23J REG,24J REG,25J REG,26 JREG,27J REG,28J REG,29J REG",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 7: 23J REG,24J REG,25J REG,26 JREG,27J REG,28J REG,29J REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bb5527b7-364b-41c2-9025-9bd2fcb859d3",
        "sizeRangeCode": "M21: 7: 23P,24P,25P,26P,27P,28P,29P",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23P,24P,25P,26P,27P,28P,29P",
        "sizeList": [
            {
                "id": "4f13725d-2172-4ba9-8a2f-0a91f69757e4"
            },
            {
                "id": "8986cde1-92c1-4986-b381-27ff524032cc"
            },
            {
                "id": "a9a44573-9f3a-461a-8607-539e110a26a9"
            },
            {
                "id": "b0d54c74-0258-4b06-8ff6-72cf375d2b90"
            },
            {
                "id": "b7644bba-e10f-41b5-8b75-c7037a1b98a0"
            },
            {
                "id": "dc5d0861-4a56-4aa8-a88d-ca1d8b339031"
            },
            {
                "id": "f6ccdaa6-c0e7-4cc2-8ef0-0ef6e5433fe9"
            }
        ],
        "displayValue": "M21: 7: 23P,24P,25P,26P,27P,28P,29P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "96db92df-08ad-4ff1-85b6-0e29acbd22f2",
        "sizeRangeCode": "M21: 7: 23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            }
        ],
        "displayValue": "M21: 7: 23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f39e67a0-63e7-4853-9b56-77fd9a81a0c1",
        "sizeRangeCode": "M21: 7: 24J REG-30J REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24J REG-30J REG",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "8c077ead-816f-4ca7-8241-8212c97e4549"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 7: 24J REG-30J REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b7a74701-d04e-4731-9388-913d97ed421d",
        "sizeRangeCode": "M21: 7: 24REG,25REG,26REG,27REG,28REG,29REG,30REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24REG,25REG,26REG,27REG,28REG,29REG,30REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            }
        ],
        "displayValue": "M21: 7: 24REG,25REG,26REG,27REG,28REG,29REG,30REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9658f012-9558-481f-aa42-e124d2e12130",
        "sizeRangeCode": "M21: 7: TBD13 - TBD29",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "TBD13 - TBD29",
        "sizeList": [
            {
                "id": "6fda10b3-f493-4f23-a49a-d62704e93133"
            },
            {
                "id": "84decd9f-875c-4e6c-a316-ca9b95d82a8a"
            },
            {
                "id": "a4ea6317-d7ac-4f4a-8ada-922fadb0e0e7"
            },
            {
                "id": "c63b4b99-e4cc-4cb2-a977-ef3f66aaee91"
            },
            {
                "id": "d5e27e9f-7bc4-4f98-88e2-dfc2ea0cf848"
            },
            {
                "id": "dc1c3caf-c762-43a3-9867-c73b851aa50f"
            },
            {
                "id": "f37ec114-20f3-461b-a505-c8ea60be6a30"
            }
        ],
        "displayValue": "M21: 7: TBD13 - TBD29",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e1211a68-0527-4712-8ff2-6dc7b10fd065",
        "sizeRangeCode": "M21: 8: 23,24,25,26,27,28,29,30",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23,24,25,26,27,28,29,30",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            }
        ],
        "displayValue": "M21: 8: 23,24,25,26,27,28,29,30",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c24d79ac-70a1-4125-95bc-bb9dca8cb16c",
        "sizeRangeCode": "M21: 8: 23J REG,24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23J REG,24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "8c077ead-816f-4ca7-8241-8212c97e4549"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "ab0dfad8-dc4a-4245-a601-b30858822b6c"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 8: 23J REG,24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "eaab011a-394c-49e1-8558-ee708f67c14b",
        "sizeRangeCode": "M21: 8: 24,25,26,27,28,29,30,31",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24,25,26,27,28,29,30,31",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 8: 24,25,26,27,28,29,30,31",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "db88f1bc-7f21-48c8-86fb-7d20631e6ffb",
        "sizeRangeCode": "M21: 8: 24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG,31J REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG,31J REG",
        "sizeList": [
            {
                "id": "3c7c8011-74bb-49dd-a643-d31013f658fa"
            },
            {
                "id": "5534f8c0-3745-40e5-bd70-95a609773d7c"
            },
            {
                "id": "8c077ead-816f-4ca7-8241-8212c97e4549"
            },
            {
                "id": "a5286586-a8fd-4a16-91fc-1602fa82f6c4"
            },
            {
                "id": "af1f52fb-e84c-4ef2-968a-38f27c8baf69"
            },
            {
                "id": "b0e90edf-706c-4427-b659-bc82b30ff19b"
            },
            {
                "id": "e187684f-4264-4859-af5e-d5a8603b9170"
            },
            {
                "id": "f4a37bc5-9f12-4b35-8afa-c53162b702c7"
            }
        ],
        "displayValue": "M21: 8: 24J REG,25J REG,26J REG,27J REG,28J REG,29J REG,30J REG,31J REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "795cf3ce-b566-429e-8b65-ae74853ff64e",
        "sizeRangeCode": "M21: 9: 23REG-31REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "23REG-31REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "bf4a5884-9eab-4423-b8c4-8065fd4a677d"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 9: 23REG-31REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "28c0b50e-e1dd-4420-a898-c511d80ee760",
        "sizeRangeCode": "M21: 9: 24 REG- 32 REG",
        "sizeModelId": "b5df31fd-e38a-4269-8370-f9def8ffd955",
        "description": "24 REG- 32 REG",
        "sizeList": [
            {
                "id": "3ef69bc9-b690-4369-aabd-18cb4dde103d"
            },
            {
                "id": "43b45095-02c8-4fe9-ab1a-1c1222cfdc7f"
            },
            {
                "id": "44a83d9c-190f-4d3d-9e9f-25a23e29e250"
            },
            {
                "id": "64237445-322b-48be-a1d0-342ce6adefe1"
            },
            {
                "id": "821161d8-e92f-4894-aea5-02ed401eb577"
            },
            {
                "id": "8c2a0310-470f-4106-aa19-6032b369bb5a"
            },
            {
                "id": "b85d7c18-5e79-4290-8ddb-d4d361a4fda9"
            },
            {
                "id": "c8ca15a9-d6c3-4124-82d9-4c44b2687604"
            },
            {
                "id": "e2cc0ec9-d6e8-404d-a750-19353a4641d1"
            }
        ],
        "displayValue": "M21: 9: 24 REG- 32 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a18382b6-44bc-4577-ae04-06ee1b994a03",
        "sizeRangeCode": "M24: 10: 24,25,26,27,28,29,30,31,32,33",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,27,28,29,30,31,32,33",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 10: 24,25,26,27,28,29,30,31,32,33",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8a87b5fe-83b9-4591-a94a-2adc042dad37",
        "sizeRangeCode": "M24: 10: 24TALL-33TALL",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24TALL-33TALL",
        "sizeList": [
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "88982802-935e-4abf-bbdc-2279db929230"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "c41b91b1-43d7-4011-a038-f63f99a64add"
            },
            {
                "id": "cdd96fc5-e76e-419b-8383-9fc55a46a666"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            }
        ],
        "displayValue": "M24: 10: 24TALL-33TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "47f1713c-3765-467a-a8ff-a5026959cb50",
        "sizeRangeCode": "M24: 11: 24-34",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24-34",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 11: 24-34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "db6b2e9c-9e17-4d35-9695-74e82396b433",
        "sizeRangeCode": "M24: 12: 24,25,26,27,28,29,30,31,32,33,34,35",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,27,28,29,30,31,32,33,34,35",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 12: 24,25,26,27,28,29,30,31,32,33,34,35",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9e1233f8-464e-43b0-b100-32c4fb7092c9",
        "sizeRangeCode": "M24: 17: M24 ALL",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "M24 ALL",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "22041c9e-2b59-4311-9402-29895432d9e1"
            },
            {
                "id": "272ed448-ff0c-4a11-8ddd-8c925565cb12"
            },
            {
                "id": "2c64ebec-b278-42c3-9163-646f1ba44001"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "6d82b7a3-1b20-4887-91ea-86cb1550b5e8"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9710fd18-3fd5-4f0e-bacb-29de6f7b28a7"
            },
            {
                "id": "adb07bf9-c2f4-4898-b4b1-f6e3921fe24b"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b98e7247-8f6a-4499-ad4d-7165243a3ecc"
            },
            {
                "id": "c829e13e-6174-4822-858a-fdf5ee20bc9e"
            },
            {
                "id": "c9c7bc73-5a60-44d8-8fa2-84d347bf5eff"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 17: M24 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ce1a5191-1859-4104-ade7-81447fb09e02",
        "sizeRangeCode": "M24: 18: M24 ALL",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "M24 ALL",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "22041c9e-2b59-4311-9402-29895432d9e1"
            },
            {
                "id": "272ed448-ff0c-4a11-8ddd-8c925565cb12"
            },
            {
                "id": "2c64ebec-b278-42c3-9163-646f1ba44001"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "6d82b7a3-1b20-4887-91ea-86cb1550b5e8"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9710fd18-3fd5-4f0e-bacb-29de6f7b28a7"
            },
            {
                "id": "adb07bf9-c2f4-4898-b4b1-f6e3921fe24b"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b98e7247-8f6a-4499-ad4d-7165243a3ecc"
            },
            {
                "id": "c829e13e-6174-4822-858a-fdf5ee20bc9e"
            },
            {
                "id": "c9c7bc73-5a60-44d8-8fa2-84d347bf5eff"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "d5bf1a53-c2a9-4c8d-b458-2181f3caa4a6"
            }
        ],
        "displayValue": "M24: 18: M24 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9c380d58-a2ca-4783-ae2d-5e0a167fde8a",
        "sizeRangeCode": "M24: 23: 24-35; 25-30 P; 27-31 T",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24-35; 25-30 P; 27-31 T",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "e79afef4-26ab-4d62-b97b-bd7193753326"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 23: 24-35; 25-30 P; 27-31 T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7e5e467c-688f-4de3-b790-5fb2be102e4f",
        "sizeRangeCode": "M24: 24: M24: 24-35",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "M24: 24-35",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 24: M24: 24-35",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8e5bf33c-f5dc-4091-b996-d913988e29ca",
        "sizeRangeCode": "M24: 25: 24,24P,25,25P,26,26P,27,27TALL,27P,28,28TALL,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,32,32TALL,33,33TALL,34,35",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,24P,25,25P,26,26P,27,27TALL,27P,28,28TALL,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,32,32TALL,33,33TALL,34,35",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 25: 24,24P,25,25P,26,26P,27,27TALL,27P,28,28TALL,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,32,32TALL,33,33TALL,34,35",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6cbffde5-e1a9-4c04-9197-66aa49220b26",
        "sizeRangeCode": "M24: 26: 24-35,24P-30P,27TALL-33TALL",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24-35,24P-30P,27TALL-33TALL",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "e79afef4-26ab-4d62-b97b-bd7193753326"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 26: 24-35,24P-30P,27TALL-33TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d8b1e098-6a01-4615-b7b4-bdf8143c9091",
        "sizeRangeCode": "M24: 28: 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 24P, 25P, 26P, 27P, 28P, 29P, 30P, 31P, 32P, 27TALL, 28TALL, 29TALL, 30TALL, 31TALL, 32TALL, 33TALL",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 24P, 25P, 26P, 27P, 28P, 29P, 30P, 31P, 32P, 27TALL, 28TALL, 29TALL, 30TALL, 31TALL, 32TALL, 33TALL",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "6ecc5bd4-7ce3-45cb-896f-ff9f72837e48"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "c1f62d27-d59a-469e-92c4-869854321681"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "e79afef4-26ab-4d62-b97b-bd7193753326"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 28: 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 24P, 25P, 26P, 27P, 28P, 29P, 30P, 31P, 32P, 27TALL, 28TALL, 29TALL, 30TALL, 31TALL, 32TALL, 33TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cdcaad25-5be7-4b6c-8bdb-5d61dc4239c5",
        "sizeRangeCode": "M24: 28: 24-35, 27TALL-33TALL, 24P-32P",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24-35, 27TALL-33TALL, 24P-32P",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "6ecc5bd4-7ce3-45cb-896f-ff9f72837e48"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "c1f62d27-d59a-469e-92c4-869854321681"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "da057f81-f853-4360-bfd1-b38079503ec3"
            },
            {
                "id": "e79afef4-26ab-4d62-b97b-bd7193753326"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            }
        ],
        "displayValue": "M24: 28: 24-35, 27TALL-33TALL, 24P-32P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "497d0836-b16c-43ca-b1d2-48b86aa8af05",
        "sizeRangeCode": "M24: 36: 24,24TALL,24P,25,25TALL,25P,26,26TALL,26P,27,27TALL,27P,28,28TALL ,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,31P,32,32TALL,32P,33,33TALL,33P,34,34TALL,34P,35,35TALL,35P",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,24TALL,24P,25,25TALL,25P,26,26TALL,26P,27,27TALL,27P,28,28TALL ,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,31P,32,32TALL,32P,33,33TALL,33P,34,34TALL,34P,35,35TALL,35P",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "29c25f1e-1e72-4648-8b69-8c3c6798d9d3"
            },
            {
                "id": "3a5d0e0d-ba67-4058-9ced-8f25642798a3"
            },
            {
                "id": "40d073d9-97dd-4070-8eba-3faa8e9be519"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "5fe296a0-fc51-49e2-a0d8-af627ee1b9a2"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "6ecc5bd4-7ce3-45cb-896f-ff9f72837e48"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "88982802-935e-4abf-bbdc-2279db929230"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "c1f62d27-d59a-469e-92c4-869854321681"
            },
            {
                "id": "c41b91b1-43d7-4011-a038-f63f99a64add"
            },
            {
                "id": "c5183cad-1bf4-4eaa-958f-61afe112a7fa"
            },
            {
                "id": "caf4a62c-36ca-44c5-be93-304aec52d22e"
            },
            {
                "id": "cdd96fc5-e76e-419b-8383-9fc55a46a666"
            },
            {
                "id": "d0f4e3ce-830f-469a-98a9-fa2442e07df9"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            },
            {
                "id": "d6cd25ef-b15f-41eb-9cc5-ff7fc131ff23"
            },
            {
                "id": "da057f81-f853-4360-bfd1-b38079503ec3"
            },
            {
                "id": "e79afef4-26ab-4d62-b97b-bd7193753326"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            },
            {
                "id": "f79242e5-c8be-47a5-853e-95c8ffaa1488"
            }
        ],
        "displayValue": "M24: 36: 24,24TALL,24P,25,25TALL,25P,26,26TALL,26P,27,27TALL,27P,28,28TALL ,28P,29,29TALL,29P,30,30TALL,30P,31,31TALL,31P,32,32TALL,32P,33,33TALL,33P,34,34TALL,34P,35,35TALL,35P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2c7f816-3a97-4b08-94a2-6ab74a1b82bd",
        "sizeRangeCode": "M24: 5: 11,12,13,14,15",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "11,12,13,14,15",
        "sizeList": [
            {
                "id": "34ef8910-3511-4af9-8eda-b90d18214fd7"
            },
            {
                "id": "40af9328-b9d2-42b3-975f-9ce12ad1fd59"
            },
            {
                "id": "4481c5a8-2a62-4784-a88a-1748fb632fb1"
            },
            {
                "id": "98266e5a-6f50-4734-b242-903d789a6814"
            },
            {
                "id": "a62243fb-645b-433c-8b2f-a8ca153a115f"
            }
        ],
        "displayValue": "M24: 5: 11,12,13,14,15",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "640711ad-c0f5-45cb-a130-db1d1b50b32e",
        "sizeRangeCode": "M24: 5: 24,25,26,27,28",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,27,28",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            }
        ],
        "displayValue": "M24: 5: 24,25,26,27,28",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d0fb0aa9-50e7-4d51-b438-bb767fb6244b",
        "sizeRangeCode": "M24: 6: 24,25,26,28,30,32",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,28,30,32",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 6: 24,25,26,28,30,32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d27310c0-ab44-4b14-b249-83946582aaae",
        "sizeRangeCode": "M24: 6: 24T-26T,28T-32T EVEN",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24T-26T,28T-32T EVEN",
        "sizeList": [
            {
                "id": "88982802-935e-4abf-bbdc-2279db929230"
            },
            {
                "id": "940a253d-8c2e-43c0-b862-02c8677bd0b4"
            },
            {
                "id": "a573a823-5809-4f39-bfe4-9a0244cbf3ed"
            },
            {
                "id": "c41b91b1-43d7-4011-a038-f63f99a64add"
            },
            {
                "id": "cdd96fc5-e76e-419b-8383-9fc55a46a666"
            },
            {
                "id": "ed5233b9-55f9-4c2b-afa8-9817e45cc963"
            }
        ],
        "displayValue": "M24: 6: 24T-26T,28T-32T EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "593c35fc-68ce-4bd6-90e0-06b2e4ee135a",
        "sizeRangeCode": "M24: 6: 25 - 30",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "25 - 30",
        "sizeList": [
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 6: 25 - 30",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "da9abd8c-49e3-4334-8d8f-f2957a198cf7",
        "sizeRangeCode": "M24: 6: 25, 26-34 Even ",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "25, 26-34 Even ",
        "sizeList": [
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "79cc725b-cb5a-48de-ba21-ac8ff83ae84f"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 6: 25, 26-34 Even ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "03813e94-6d0f-46b4-a301-8032c0448410",
        "sizeRangeCode": "M24: 7: 23,24,25,26,27,28,29",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23,24,25,26,27,28,29",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "272ed448-ff0c-4a11-8ddd-8c925565cb12"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            }
        ],
        "displayValue": "M24: 7: 23,24,25,26,27,28,29",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "94e14d8b-da30-4a07-b831-2cd9c1351227",
        "sizeRangeCode": "M24: 7: 23J,24J,25J,26J,27J,28J,29J",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23J,24J,25J,26J,27J,28J,29J",
        "sizeList": [
            {
                "id": "22041c9e-2b59-4311-9402-29895432d9e1"
            },
            {
                "id": "2c64ebec-b278-42c3-9163-646f1ba44001"
            },
            {
                "id": "6d82b7a3-1b20-4887-91ea-86cb1550b5e8"
            },
            {
                "id": "9710fd18-3fd5-4f0e-bacb-29de6f7b28a7"
            },
            {
                "id": "b98e7247-8f6a-4499-ad4d-7165243a3ecc"
            },
            {
                "id": "c829e13e-6174-4822-858a-fdf5ee20bc9e"
            },
            {
                "id": "c9c7bc73-5a60-44d8-8fa2-84d347bf5eff"
            }
        ],
        "displayValue": "M24: 7: 23J,24J,25J,26J,27J,28J,29J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "75efbd48-976f-488b-8004-cba91d750a7c",
        "sizeRangeCode": "M24: 7: 23P,24P,25P,26P,27P,28P,29P",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23P,24P,25P,26P,27P,28P,29P",
        "sizeList": [
            {
                "id": "1bcb48e0-b4d4-4a1a-9ab3-8065a68971c2"
            },
            {
                "id": "483dffd7-8758-4b87-9ad8-aad0b2224a18"
            },
            {
                "id": "81041b50-02b5-4c52-b986-5808799e45b2"
            },
            {
                "id": "93a95b7a-6cc2-42b4-a1af-9f45103812c0"
            },
            {
                "id": "9f52247d-d2fb-4a0f-abc2-e0929569a6c1"
            },
            {
                "id": "b8c6cff8-70a6-4caa-a085-fc12bd3cd531"
            },
            {
                "id": "eacd870d-1b3b-4dae-8366-060ac529519e"
            }
        ],
        "displayValue": "M24: 7: 23P,24P,25P,26P,27P,28P,29P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e4896cfd-510b-4f34-8e6e-318456edf361",
        "sizeRangeCode": "M24: 7: 24,25,26,27,28,29,30",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,27,28,29,30",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 7: 24,25,26,27,28,29,30",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6b6a0660-f0ac-42c0-8589-4505b9abab2e",
        "sizeRangeCode": "M24: 8: 23,24,25,26,27,28,29,30",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23,24,25,26,27,28,29,30",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "272ed448-ff0c-4a11-8ddd-8c925565cb12"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 8: 23,24,25,26,27,28,29,30",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f9912dc8-e977-4f6e-9927-0562e50802b0",
        "sizeRangeCode": "M24: 8: 23J,24J,25J,26J,27J,28J,29J,30J",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23J,24J,25J,26J,27J,28J,29J,30J",
        "sizeList": [
            {
                "id": "22041c9e-2b59-4311-9402-29895432d9e1"
            },
            {
                "id": "2c64ebec-b278-42c3-9163-646f1ba44001"
            },
            {
                "id": "6d82b7a3-1b20-4887-91ea-86cb1550b5e8"
            },
            {
                "id": "9710fd18-3fd5-4f0e-bacb-29de6f7b28a7"
            },
            {
                "id": "adb07bf9-c2f4-4898-b4b1-f6e3921fe24b"
            },
            {
                "id": "b98e7247-8f6a-4499-ad4d-7165243a3ecc"
            },
            {
                "id": "c829e13e-6174-4822-858a-fdf5ee20bc9e"
            },
            {
                "id": "c9c7bc73-5a60-44d8-8fa2-84d347bf5eff"
            }
        ],
        "displayValue": "M24: 8: 23J,24J,25J,26J,27J,28J,29J,30J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5a801de5-e623-4c33-be88-c6e7428eb1a4",
        "sizeRangeCode": "M24: 8: 24,25,26,27,28,29,30,31",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24,25,26,27,28,29,30,31",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 8: 24,25,26,27,28,29,30,31",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a48d38cf-7b90-4013-ba5c-509caad28e9b",
        "sizeRangeCode": "M24: 8: 24J,25J,26J,27J,28J,29J,30J,31J",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24J,25J,26J,27J,28J,29J,30J,31J",
        "sizeList": [
            {
                "id": "2c64ebec-b278-42c3-9163-646f1ba44001"
            },
            {
                "id": "6d82b7a3-1b20-4887-91ea-86cb1550b5e8"
            },
            {
                "id": "9710fd18-3fd5-4f0e-bacb-29de6f7b28a7"
            },
            {
                "id": "adb07bf9-c2f4-4898-b4b1-f6e3921fe24b"
            },
            {
                "id": "b98e7247-8f6a-4499-ad4d-7165243a3ecc"
            },
            {
                "id": "c829e13e-6174-4822-858a-fdf5ee20bc9e"
            },
            {
                "id": "c9c7bc73-5a60-44d8-8fa2-84d347bf5eff"
            },
            {
                "id": "d5bf1a53-c2a9-4c8d-b458-2181f3caa4a6"
            }
        ],
        "displayValue": "M24: 8: 24J,25J,26J,27J,28J,29J,30J,31J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "915d24a6-379b-444b-a277-77d4c2426ee2",
        "sizeRangeCode": "M24: 8: 25 - 32",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "25 - 32",
        "sizeList": [
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 8: 25 - 32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "db04ca89-9ebe-4ed9-93a2-b9def16699f4",
        "sizeRangeCode": "M24: 9: 23,24,25,26,27,28,29,30,31",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "23,24,25,26,27,28,29,30,31",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "272ed448-ff0c-4a11-8ddd-8c925565cb12"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 9: 23,24,25,26,27,28,29,30,31",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cb36c2d5-c1bc-4531-9624-6eebef87e8e4",
        "sizeRangeCode": "M24: 9: 24-32",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "24-32",
        "sizeList": [
            {
                "id": "1217adbd-96fd-433c-9e0b-20eec65e9425"
            },
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 9: 24-32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3a1a068f-9f08-4714-b838-5d53d9f3ada2",
        "sizeRangeCode": "M24: 9: M24:2501:2601:2701:2801:2901:3001:3101:3201:3301",
        "sizeModelId": "12401c6c-6660-4c26-a097-eb424d69faf2",
        "description": "M24:2501:2601:2701:2801:2901:3001:3101:3201:3301",
        "sizeList": [
            {
                "id": "51cb9c9d-24c5-4685-b6c9-6e67ca9eaf54"
            },
            {
                "id": "5936a56d-ffa0-4628-9897-3b15c3220939"
            },
            {
                "id": "6815a006-3ef4-45a1-8ecf-66a365802282"
            },
            {
                "id": "8ac4b325-ba97-4e83-9821-6e025a323307"
            },
            {
                "id": "9251ef4c-b8d8-4c26-ac9a-ac5cd6910023"
            },
            {
                "id": "9dbfbd4b-7523-4319-8c63-2c150b75ea3a"
            },
            {
                "id": "aecc9b17-208e-4a7a-ae72-051264c23c51"
            },
            {
                "id": "b5f40763-7752-4adf-8303-da30642fff13"
            },
            {
                "id": "d3554047-7f75-4d40-a5cd-b26df7c0be42"
            }
        ],
        "displayValue": "M24: 9: M24:2501:2601:2701:2801:2901:3001:3101:3201:3301",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4184d4c4-4cd4-449e-9a0c-d1381790af81",
        "sizeRangeCode": "M25: 10: 00,0,2,4,6,8,10,12,14,16",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00,0,2,4,6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            }
        ],
        "displayValue": "M25: 10: 00,0,2,4,6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4dfff36c-08be-4cfe-978b-78c86016d462",
        "sizeRangeCode": "M25: 11: 00-20",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00-20",
        "sizeList": [
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            }
        ],
        "displayValue": "M25: 11: 00-20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8f42f6be-fc83-40f5-9be2-afef46d85269",
        "sizeRangeCode": "M25: 11: M25: 0-20",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "M25: 0-20",
        "sizeList": [
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            }
        ],
        "displayValue": "M25: 11: M25: 0-20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5b762ca8-356a-42ff-8f9c-b8feeed1e0ff",
        "sizeRangeCode": "M25: 12: 00,0,2,4,6,8,10,12,14,16,18,20",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00,0,2,4,6,8,10,12,14,16,18,20",
        "sizeList": [
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            }
        ],
        "displayValue": "M25: 12: 00,0,2,4,6,8,10,12,14,16,18,20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bb827fda-1ffc-437a-a60f-cd81879d863a",
        "sizeRangeCode": "M25: 17: M25 ALL",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "M25 ALL",
        "sizeList": [
            {
                "id": "1186d222-bd57-4410-a539-fd3269b8b317"
            },
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "48379f07-0170-4ac7-b4c2-698ed5299ccd"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "8a6d062f-de2d-4b90-88fb-1ffc253f5c5d"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 17: M25 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "17acc25e-e1e9-45e8-82b5-a6640ae7fd0c",
        "sizeRangeCode": "M25: 18: M25 ALL",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "M25 ALL",
        "sizeList": [
            {
                "id": "077a48e0-3a66-4b2c-94d8-4c7144e043cc"
            },
            {
                "id": "1186d222-bd57-4410-a539-fd3269b8b317"
            },
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "48379f07-0170-4ac7-b4c2-698ed5299ccd"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "8a6d062f-de2d-4b90-88fb-1ffc253f5c5d"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 18: M25 ALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "928a4277-441f-4cd9-9d29-a95f53596cfc",
        "sizeRangeCode": "M25: 20: 00-20,00-14P,4-16T",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00-20,00-14P,4-16T",
        "sizeList": [
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 20: 00-20,00-14P,4-16T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "301e1836-02aa-4ba3-866a-570c28b5ba46",
        "sizeRangeCode": "M25: 23: 0,2,4,6,8,10,12,14,16,18,20,00,4TALL,6TALL,8TALL,10TALL,12TALL,0P,2P,4P,6P,8P,10P",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0,2,4,6,8,10,12,14,16,18,20,00,4TALL,6TALL,8TALL,10TALL,12TALL,0P,2P,4P,6P,8P,10P",
        "sizeList": [
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            }
        ],
        "displayValue": "M25: 23: 0,2,4,6,8,10,12,14,16,18,20,00,4TALL,6TALL,8TALL,10TALL,12TALL,0P,2P,4P,6P,8P,10P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bdd49f08-f923-4ea5-afca-6aad8e7f7a69",
        "sizeRangeCode": "M25: 27: 0-20, 4TALL-16TALL, 00P-14P",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0-20, 4TALL-16TALL, 00P-14P",
        "sizeList": [
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 27: 0-20, 4TALL-16TALL, 00P-14P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8ec8608c-3f0c-42e8-9bfd-f2a9f75e2d58",
        "sizeRangeCode": "M25: 27: 0001-2001",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0001-2001",
        "sizeList": [
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 27: 0001-2001",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2972b0d-73ba-420f-acf5-3929d384d8d2",
        "sizeRangeCode": "M25: 28: 00,0,2,4,6,8,0,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00,0,2,4,6,8,0,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "sizeList": [
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 28: 00,0,2,4,6,8,0,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2f4a0bf8-063e-43aa-8668-23e3bd436be9",
        "sizeRangeCode": "M25: 35: 20TALL-0P",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "20TALL-0P",
        "sizeList": [
            {
                "id": "01006ecd-fb36-4cfa-8084-9b87bc8ec855"
            },
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2518f476-aa98-4b34-8974-2251d064812b"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3cce9b39-8b58-4b20-bea4-312df0b54340"
            },
            {
                "id": "3d08546d-f19a-4cbd-bc0d-5225e36cac10"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "78ac2330-ecb2-401d-90dc-67fa56075f97"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "aed2b202-a817-4945-a1bd-41a539a8c79a"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c13a2371-ab01-4011-9ffa-905db881d044"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "c6dd51d0-d426-4951-ba67-f704b780376d"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 35: 20TALL-0P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b08dc2d9-2d16-40ac-9c7e-503e199fb874",
        "sizeRangeCode": "M25: 36: 00-20, 00-20 PETITE, 00-20 TALL",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00-20, 00-20 PETITE, 00-20 TALL",
        "sizeList": [
            {
                "id": "01006ecd-fb36-4cfa-8084-9b87bc8ec855"
            },
            {
                "id": "13d3fa12-3fda-4199-88f9-c48a37865e89"
            },
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "21e5ed0f-02f3-4c6b-9530-6f72d59d2500"
            },
            {
                "id": "2518f476-aa98-4b34-8974-2251d064812b"
            },
            {
                "id": "2c172ecf-bd7f-49d0-b62c-024729efe9c8"
            },
            {
                "id": "2c8dbaeb-3897-4fc0-a66b-4abd0db2e4df"
            },
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3885cf56-9701-4fa8-8bfe-01868c41adbd"
            },
            {
                "id": "3cce9b39-8b58-4b20-bea4-312df0b54340"
            },
            {
                "id": "3d08546d-f19a-4cbd-bc0d-5225e36cac10"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "3f8eb82c-ad63-411b-bd02-8be120f6b011"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "5380c032-d7c7-4135-99b6-d2d60f9d636e"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "726d01ce-61ed-4243-9ce1-72b1a4eb4315"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "78ac2330-ecb2-401d-90dc-67fa56075f97"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "80764668-8a0f-4b6a-a53f-ba31e045e18a"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a5f0fbba-448c-49d4-85ec-28154a47d745"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "ad6beabd-9aa3-488a-8aea-d76af97371a5"
            },
            {
                "id": "aed2b202-a817-4945-a1bd-41a539a8c79a"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            },
            {
                "id": "c13a2371-ab01-4011-9ffa-905db881d044"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "c6dd51d0-d426-4951-ba67-f704b780376d"
            },
            {
                "id": "cb708739-1f33-4d38-9afd-21009bc3ee81"
            }
        ],
        "displayValue": "M25: 36: 00-20, 00-20 PETITE, 00-20 TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8529d94f-6375-42b2-8a55-f753c6f0fa20",
        "sizeRangeCode": "M25: 5: 0,2,4,6,8",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0,2,4,6,8",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 5: 0,2,4,6,8",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1fe6f2bc-eb30-44a2-9a68-5febe41d3b47",
        "sizeRangeCode": "M25: 6: 0-10",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0-10",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 6: 0-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0295aec0-9541-456c-af7a-a47e9a30c93f",
        "sizeRangeCode": "M25: 7: 0,2,4,6,8,10,12",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0,2,4,6,8,10,12",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 7: 0,2,4,6,8,10,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "27ff4845-cbc7-4d7e-9643-de0d9baf729d",
        "sizeRangeCode": "M25: 7: 00,0,2,4,6,8,10",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00,0,2,4,6,8,10",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 7: 00,0,2,4,6,8,10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a9b08bf7-4a25-4727-8444-79d6f97c6d9b",
        "sizeRangeCode": "M25: 7: 000,00,0,2,4,6,8",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000,00,0,2,4,6,8",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "8a6d062f-de2d-4b90-88fb-1ffc253f5c5d"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 7: 000,00,0,2,4,6,8",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "86c37113-e1da-48e2-b4eb-788bfe3b1332",
        "sizeRangeCode": "M25: 7: 000J,00J,0J,2J,4J,6J,8J",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000J,00J,0J,2J,4J,6J,8J",
        "sizeList": [
            {
                "id": "1186d222-bd57-4410-a539-fd3269b8b317"
            },
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 7: 000J,00J,0J,2J,4J,6J,8J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "eaa09f41-1cb8-48a3-8274-e9ccedd1ae43",
        "sizeRangeCode": "M25: 7: 000P,00P,0P,2P,4P,6P,8P",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000P,00P,0P,2P,4P,6P,8P",
        "sizeList": [
            {
                "id": "1baee5d0-ad0f-4c53-aca4-bc3a3ad9ce4c"
            },
            {
                "id": "1fc993e1-c125-4eed-ac97-2447434b22a5"
            },
            {
                "id": "59493b03-c796-4ee5-a3ee-118ea4d8396e"
            },
            {
                "id": "662fb891-4ee8-4692-8030-f8b59592f581"
            },
            {
                "id": "74fc16fd-234b-4ee9-91a2-7eb5f50966ee"
            },
            {
                "id": "c3727b98-34c2-486e-810b-c7dec181823f"
            },
            {
                "id": "e5f2aaf1-721c-4392-b9c5-ae808ca83a70"
            }
        ],
        "displayValue": "M25: 7: 000P,00P,0P,2P,4P,6P,8P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "29ab00d0-ae95-42fc-95f2-a899010d44a0",
        "sizeRangeCode": "M25: 7: 00J - 10J",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00J - 10J",
        "sizeList": [
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "48379f07-0170-4ac7-b4c2-698ed5299ccd"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 7: 00J - 10J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cd44ed1b-1388-499e-877d-785e868bab29",
        "sizeRangeCode": "M25: 8: 00,0,2,4,6,8,10,12",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00,0,2,4,6,8,10,12",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 8: 00,0,2,4,6,8,10,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "db81c51f-f091-47d7-9730-c2b65ea7bed5",
        "sizeRangeCode": "M25: 8: 000,00,0,2,4,6,8,10",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000,00,0,2,4,6,8,10",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "8a6d062f-de2d-4b90-88fb-1ffc253f5c5d"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 8: 000,00,0,2,4,6,8,10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a833473e-29a4-4134-baac-1ee678626ead",
        "sizeRangeCode": "M25: 8: 000J,00J,0J,2J,4J,6J,8J,10J",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000J,00J,0J,2J,4J,6J,8J,10J",
        "sizeList": [
            {
                "id": "1186d222-bd57-4410-a539-fd3269b8b317"
            },
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "48379f07-0170-4ac7-b4c2-698ed5299ccd"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 8: 000J,00J,0J,2J,4J,6J,8J,10J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9e3fba51-bcb2-4aa1-a233-5abfd63d6e5a",
        "sizeRangeCode": "M25: 8: 00J,0J,2J,4J,6J,8J,10J,12J",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "00J,0J,2J,4J,6J,8J,10J,12J",
        "sizeList": [
            {
                "id": "077a48e0-3a66-4b2c-94d8-4c7144e043cc"
            },
            {
                "id": "1859eb8f-7b1f-4a5e-8f66-80eb69c85a96"
            },
            {
                "id": "2227d5d6-dc49-40dd-b91e-5ff9ab93dade"
            },
            {
                "id": "48379f07-0170-4ac7-b4c2-698ed5299ccd"
            },
            {
                "id": "78305ed7-27f7-4f0e-bb2f-0b11f3497499"
            },
            {
                "id": "af270d41-f76d-457b-8d1c-b0c4be6a7c6d"
            },
            {
                "id": "b16e661b-de1b-4dfd-ad73-a4831eccedd8"
            },
            {
                "id": "e75a28da-90a4-4472-ab0e-106343d48acc"
            }
        ],
        "displayValue": "M25: 8: 00J,0J,2J,4J,6J,8J,10J,12J",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "af59fedc-eafb-43a8-98ca-ed394715d0b2",
        "sizeRangeCode": "M25: 9: 0,2,4,6,8,10,12,14,16",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "0,2,4,6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            },
            {
                "id": "bcfb40f1-7bd7-4529-8fda-ad1e77a34f68"
            }
        ],
        "displayValue": "M25: 9: 0,2,4,6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c9ee78f1-47b2-4439-b1f6-72c8e435fd78",
        "sizeRangeCode": "M25: 9: 000-12",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "000-12",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "8a6d062f-de2d-4b90-88fb-1ffc253f5c5d"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 9: 000-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c32ca2bb-cf92-4ea7-961e-0bb46dd1a0a1",
        "sizeRangeCode": "M25: 9: M25:0001:0101:0201:0401:0601:0801:1001:1201:1401",
        "sizeModelId": "c6b1d9ea-3667-4888-889e-f74ec7faface",
        "description": "M25:0001:0101:0201:0401:0601:0801:1001:1201:1401",
        "sizeList": [
            {
                "id": "2ee7c849-6321-4aa1-8c1b-d413840fe92f"
            },
            {
                "id": "3d936e69-921b-4053-92fa-5546ad56bd9a"
            },
            {
                "id": "4426025a-c331-4d43-abf7-4cec58e1b330"
            },
            {
                "id": "61c4e0c4-553f-4cfd-9666-0853e9c61dcc"
            },
            {
                "id": "68132750-1bcc-4763-b828-5d82bc29c684"
            },
            {
                "id": "7e13fb45-e324-4b25-9c84-a65a45982140"
            },
            {
                "id": "967894c2-2eb9-40ed-b6a5-9c294c853cdd"
            },
            {
                "id": "9e64961e-d264-4a10-b86e-d6b0d6da8697"
            },
            {
                "id": "a6bca164-d627-43a2-957c-1a373233bbff"
            }
        ],
        "displayValue": "M25: 9: M25:0001:0101:0201:0401:0601:0801:1001:1201:1401",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "acca5a92-877d-46d3-adc1-e2505442de91",
        "sizeRangeCode": "M26: 10: 00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG,14REG,16REG",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG,14REG,16REG",
        "sizeList": [
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "5dba4196-1892-4601-8f89-5ca35a4bb2cd"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            }
        ],
        "displayValue": "M26: 10: 00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG,14REG,16REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fcace22f-9275-4f11-93bb-c7718807e7a9",
        "sizeRangeCode": "M26: 27: 00,0,2,4,6,8,1O,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00,0,2,4,6,8,1O,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "sizeList": [
            {
                "id": "00d39537-2098-49ee-9e6a-37211a3cf4c9"
            },
            {
                "id": "022c16a2-0bab-4a90-921d-4839bb721ac1"
            },
            {
                "id": "02443b44-4840-4f94-b2b6-e405a0569d2f"
            },
            {
                "id": "0c38fdd9-6af2-444e-800f-0d47047eea79"
            },
            {
                "id": "3b17e404-af04-4e26-b72c-578a020d2ec3"
            },
            {
                "id": "41919b3f-8cbf-4da7-86dd-8b6deb7d691c"
            },
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "4d266767-4827-4ef0-b164-07c578320172"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "623e2abd-7a58-4ac7-a3eb-cd22bdc93797"
            },
            {
                "id": "6e7c3d40-8da2-4bd4-913f-5b02c2bb4abc"
            },
            {
                "id": "726d78ab-e203-4ff2-93f4-7a2e596eadb3"
            },
            {
                "id": "77d3fc28-dfd5-4964-83b3-f2b6bb86bef1"
            },
            {
                "id": "87c0c4a4-2c8d-4493-9e74-c1fa1123ca86"
            },
            {
                "id": "8f3dbd49-9b1d-4dd2-b516-3a8b0a3a801b"
            },
            {
                "id": "95104e74-7c35-4718-b422-55257da2f64c"
            },
            {
                "id": "9cb5e43a-874c-4175-ac9b-ab86d8c31311"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "b16687c1-9cb2-426d-9fac-05dadf66b5ea"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            },
            {
                "id": "f52bf908-9142-4ce1-8e5c-3ab41e776b95"
            },
            {
                "id": "f842357e-2080-4697-944f-145ce9a330d7"
            },
            {
                "id": "f8a0447a-9d16-46b0-8626-914ef10c4c6e"
            }
        ],
        "displayValue": "M26: 27: 00,0,2,4,6,8,1O,12,14,16,18,20,00P,0P,2P,4P,6P,8P,10P,12P,14P,4T,6T,8T,10T,12T,14T,16T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7c058090-9930-4725-9935-2e4544ffc937",
        "sizeRangeCode": "M26: 28: 00-20,00-14P,4-16T",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00-20,00-14P,4-16T",
        "sizeList": [
            {
                "id": "00d39537-2098-49ee-9e6a-37211a3cf4c9"
            },
            {
                "id": "022c16a2-0bab-4a90-921d-4839bb721ac1"
            },
            {
                "id": "02443b44-4840-4f94-b2b6-e405a0569d2f"
            },
            {
                "id": "0c38fdd9-6af2-444e-800f-0d47047eea79"
            },
            {
                "id": "3b17e404-af04-4e26-b72c-578a020d2ec3"
            },
            {
                "id": "41919b3f-8cbf-4da7-86dd-8b6deb7d691c"
            },
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "5dba4196-1892-4601-8f89-5ca35a4bb2cd"
            },
            {
                "id": "623e2abd-7a58-4ac7-a3eb-cd22bdc93797"
            },
            {
                "id": "6e7c3d40-8da2-4bd4-913f-5b02c2bb4abc"
            },
            {
                "id": "726d78ab-e203-4ff2-93f4-7a2e596eadb3"
            },
            {
                "id": "87c0c4a4-2c8d-4493-9e74-c1fa1123ca86"
            },
            {
                "id": "8f3dbd49-9b1d-4dd2-b516-3a8b0a3a801b"
            },
            {
                "id": "95104e74-7c35-4718-b422-55257da2f64c"
            },
            {
                "id": "9cb5e43a-874c-4175-ac9b-ab86d8c31311"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "ae68cc18-f8a7-428f-b2fa-e50ad0f2307c"
            },
            {
                "id": "b16687c1-9cb2-426d-9fac-05dadf66b5ea"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            },
            {
                "id": "f52bf908-9142-4ce1-8e5c-3ab41e776b95"
            },
            {
                "id": "f842357e-2080-4697-944f-145ce9a330d7"
            },
            {
                "id": "f8a0447a-9d16-46b0-8626-914ef10c4c6e"
            }
        ],
        "displayValue": "M26: 28: 00-20,00-14P,4-16T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0df1e51f-928d-4a54-be70-10032fa44eb9",
        "sizeRangeCode": "M26: 28: 00-20REG, 00-14P, 4-16TALL",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00-20REG, 00-14P, 4-16TALL",
        "sizeList": [
            {
                "id": "00d39537-2098-49ee-9e6a-37211a3cf4c9"
            },
            {
                "id": "022c16a2-0bab-4a90-921d-4839bb721ac1"
            },
            {
                "id": "02443b44-4840-4f94-b2b6-e405a0569d2f"
            },
            {
                "id": "0c38fdd9-6af2-444e-800f-0d47047eea79"
            },
            {
                "id": "3b17e404-af04-4e26-b72c-578a020d2ec3"
            },
            {
                "id": "41919b3f-8cbf-4da7-86dd-8b6deb7d691c"
            },
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "5dba4196-1892-4601-8f89-5ca35a4bb2cd"
            },
            {
                "id": "623e2abd-7a58-4ac7-a3eb-cd22bdc93797"
            },
            {
                "id": "6e7c3d40-8da2-4bd4-913f-5b02c2bb4abc"
            },
            {
                "id": "726d78ab-e203-4ff2-93f4-7a2e596eadb3"
            },
            {
                "id": "77d3fc28-dfd5-4964-83b3-f2b6bb86bef1"
            },
            {
                "id": "87c0c4a4-2c8d-4493-9e74-c1fa1123ca86"
            },
            {
                "id": "8f3dbd49-9b1d-4dd2-b516-3a8b0a3a801b"
            },
            {
                "id": "95104e74-7c35-4718-b422-55257da2f64c"
            },
            {
                "id": "9cb5e43a-874c-4175-ac9b-ab86d8c31311"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "b16687c1-9cb2-426d-9fac-05dadf66b5ea"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            },
            {
                "id": "f52bf908-9142-4ce1-8e5c-3ab41e776b95"
            },
            {
                "id": "f842357e-2080-4697-944f-145ce9a330d7"
            },
            {
                "id": "f8a0447a-9d16-46b0-8626-914ef10c4c6e"
            }
        ],
        "displayValue": "M26: 28: 00-20REG, 00-14P, 4-16TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "df771504-82b0-4c38-869f-7792c4922442",
        "sizeRangeCode": "M26: 45: 00REG,00P,0REG,0P,2SHORT,2REG,2LONG,2P,4SHORT,4REG,4LONG,4TALL,4P,6SHORT,6REG,6LONG,6TALL,6P,8SHORT,8REG,8LONG,8TALL,8P,10SHORT,10REG,10LONG,10TALL,10P,12SHORT,12REG,12LONG,12TALL,12P,14SHORT,14REG,14LONG,14TALL,14P,16SHORT,16REG,16LONG,16TALL,18REG,18LONG,20REG",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00REG,00P,0REG,0P,2SHORT,2REG,2LONG,2P,4SHORT,4REG,4LONG,4TALL,4P,6SHORT,6REG,6LONG,6TALL,6P,8SHORT,8REG,8LONG,8TALL,8P,10SHORT,10REG,10LONG,10TALL,10P,12SHORT,12REG,12LONG,12TALL,12P,14SHORT,14REG,14LONG,14TALL,14P,16SHORT,16REG,16LONG,16TALL,18REG,18LONG,20REG",
        "sizeList": [
            {
                "id": "00d39537-2098-49ee-9e6a-37211a3cf4c9"
            },
            {
                "id": "022c16a2-0bab-4a90-921d-4839bb721ac1"
            },
            {
                "id": "02443b44-4840-4f94-b2b6-e405a0569d2f"
            },
            {
                "id": "0c38fdd9-6af2-444e-800f-0d47047eea79"
            },
            {
                "id": "3857fe95-25e6-4427-bba3-3294ea3c6d0a"
            },
            {
                "id": "387cdc35-aab1-4ef3-b3d4-1b0a57d11eed"
            },
            {
                "id": "3b17e404-af04-4e26-b72c-578a020d2ec3"
            },
            {
                "id": "41243b33-5e89-4806-bb5c-ba79c9e3e326"
            },
            {
                "id": "41919b3f-8cbf-4da7-86dd-8b6deb7d691c"
            },
            {
                "id": "496270c8-d830-4a2f-8439-d8541ee61694"
            },
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "4cd76eb8-7d99-471b-8f17-c904c3f94708"
            },
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "4d266767-4827-4ef0-b164-07c578320172"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5acd5362-1e85-413a-ab11-18c3c947c33e"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "5dba4196-1892-4601-8f89-5ca35a4bb2cd"
            },
            {
                "id": "623e2abd-7a58-4ac7-a3eb-cd22bdc93797"
            },
            {
                "id": "6e7c3d40-8da2-4bd4-913f-5b02c2bb4abc"
            },
            {
                "id": "71174295-fc82-4014-ab1f-ec595826274a"
            },
            {
                "id": "726d78ab-e203-4ff2-93f4-7a2e596eadb3"
            },
            {
                "id": "77d3fc28-dfd5-4964-83b3-f2b6bb86bef1"
            },
            {
                "id": "8241e4f9-7edd-4c6c-a558-c9cddeb0c5e5"
            },
            {
                "id": "82db819a-402e-4db8-a369-d5e750d5e96a"
            },
            {
                "id": "87c0c4a4-2c8d-4493-9e74-c1fa1123ca86"
            },
            {
                "id": "88a4d7f9-9a10-42af-abb3-a4fdff988730"
            },
            {
                "id": "8f3dbd49-9b1d-4dd2-b516-3a8b0a3a801b"
            },
            {
                "id": "90c58ba9-e987-4a5b-8ec6-507618dd52d6"
            },
            {
                "id": "95104e74-7c35-4718-b422-55257da2f64c"
            },
            {
                "id": "9cb5e43a-874c-4175-ac9b-ab86d8c31311"
            },
            {
                "id": "a0e4ff90-fcc5-48ec-a3f8-8e73c9c09b8b"
            },
            {
                "id": "a37d7386-df1d-4e63-ad39-3f5dc7a4f8b2"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "aae21184-8b78-4fc3-82e5-6b90881c9dc8"
            },
            {
                "id": "ade9c203-1451-43da-ab2a-a856dd2692a9"
            },
            {
                "id": "ae68cc18-f8a7-428f-b2fa-e50ad0f2307c"
            },
            {
                "id": "b16687c1-9cb2-426d-9fac-05dadf66b5ea"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            },
            {
                "id": "f52bf908-9142-4ce1-8e5c-3ab41e776b95"
            },
            {
                "id": "f842357e-2080-4697-944f-145ce9a330d7"
            },
            {
                "id": "f8a0447a-9d16-46b0-8626-914ef10c4c6e"
            }
        ],
        "displayValue": "M26: 45: 00REG,00P,0REG,0P,2SHORT,2REG,2LONG,2P,4SHORT,4REG,4LONG,4TALL,4P,6SHORT,6REG,6LONG,6TALL,6P,8SHORT,8REG,8LONG,8TALL,8P,10SHORT,10REG,10LONG,10TALL,10P,12SHORT,12REG,12LONG,12TALL,12P,14SHORT,14REG,14LONG,14TALL,14P,16SHORT,16REG,16LONG,16TALL,18REG,18LONG,20REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c1692e48-38b8-4398-ac7d-b17badf14b2f",
        "sizeRangeCode": "M26: 7: 000J REG,00J REG,0J REG,2J REG,4J REG,6J REG,8J REG",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "000J REG,00J REG,0J REG,2J REG,4J REG,6J REG,8J REG",
        "sizeList": [
            {
                "id": "38bb87d1-e3dd-4658-9760-38ed6d07728c"
            },
            {
                "id": "3c39457b-f1db-4edc-ab50-ea4bf31e827c"
            },
            {
                "id": "3ed4b29d-7ac8-43f4-a269-d212607d7500"
            },
            {
                "id": "7335f9af-0cc8-4a43-96f1-476c3f7d1279"
            },
            {
                "id": "83c1bea3-9437-4e81-b806-849701072345"
            },
            {
                "id": "bc7b85a2-ceb5-4df5-b553-c1d6dcbe3c6e"
            },
            {
                "id": "f7a60cd7-2c25-4f87-8b7c-0889dbc52f09"
            }
        ],
        "displayValue": "M26: 7: 000J REG,00J REG,0J REG,2J REG,4J REG,6J REG,8J REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e7065fdb-6a7e-4358-9fad-54da988c3198",
        "sizeRangeCode": "M26: 7: 000P,00P,0P,2P,4P,6P,8P",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "000P,00P,0P,2P,4P,6P,8P",
        "sizeList": [
            {
                "id": "00d39537-2098-49ee-9e6a-37211a3cf4c9"
            },
            {
                "id": "022c16a2-0bab-4a90-921d-4839bb721ac1"
            },
            {
                "id": "3b17e404-af04-4e26-b72c-578a020d2ec3"
            },
            {
                "id": "6e7c3d40-8da2-4bd4-913f-5b02c2bb4abc"
            },
            {
                "id": "95104e74-7c35-4718-b422-55257da2f64c"
            },
            {
                "id": "aacc379a-b49f-42d6-a6d8-072ac74fe0c8"
            },
            {
                "id": "f52bf908-9142-4ce1-8e5c-3ab41e776b95"
            }
        ],
        "displayValue": "M26: 7: 000P,00P,0P,2P,4P,6P,8P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "732a7315-61a2-4a4e-98dc-01853d33435c",
        "sizeRangeCode": "M26: 7: 000REG,00REG,0REG,2REG,4REG,6REG,8REG",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "000REG,00REG,0REG,2REG,4REG,6REG,8REG",
        "sizeList": [
            {
                "id": "12cc2c98-e4d1-4e4e-b9f6-d8b3a9976820"
            },
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            }
        ],
        "displayValue": "M26: 7: 000REG,00REG,0REG,2REG,4REG,6REG,8REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cf9bbe95-dbd4-4531-8b5d-1f99dd781910",
        "sizeRangeCode": "M26: 8: 00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG",
        "sizeList": [
            {
                "id": "4a41bb6a-9c18-454a-bcb2-9995385d742e"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            }
        ],
        "displayValue": "M26: 8: 00REG,0REG,2REG,4REG,6REG,8REG,10REG,12REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d95b63a1-5ecb-4c64-ba9f-79fdeed73fd6",
        "sizeRangeCode": "M26: 9: 0REG-16REG EVEN",
        "sizeModelId": "284a72c4-959a-441c-b0eb-90104beb8b6b",
        "description": "0REG-16REG EVEN",
        "sizeList": [
            {
                "id": "4cdf70fd-cbce-4dd7-95ea-2d2ab18ef273"
            },
            {
                "id": "51851af9-5aab-459b-a4dc-368a0174314f"
            },
            {
                "id": "5d149b7b-8f18-4c20-96f1-ecdf9d73e6db"
            },
            {
                "id": "5dba4196-1892-4601-8f89-5ca35a4bb2cd"
            },
            {
                "id": "a45db1aa-a0b5-47f7-a315-cc8361289c66"
            },
            {
                "id": "a6f76917-54cf-48b3-b15b-dcbdce9b7e60"
            },
            {
                "id": "be0daeee-2b78-439c-93f0-6d871ab7572c"
            },
            {
                "id": "e18257db-6f29-4e4d-a010-156f9b0321de"
            },
            {
                "id": "eb256637-1206-433c-b0b7-2f95962ec2ea"
            }
        ],
        "displayValue": "M26: 9: 0REG-16REG EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e1319ea3-bd76-4aa6-8730-4c7416f825e6",
        "sizeRangeCode": "M29: 1: ONESIZE",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "ONESIZE",
        "sizeList": [
            {
                "id": "925b41b5-c904-4494-9fd8-86628daf911c"
            }
        ],
        "displayValue": "M29: 1: ONESIZE",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d39ef190-bb31-483c-91ab-d9a833c76f88",
        "sizeRangeCode": "M29: 2: S/M,L/XL",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "S/M,L/XL",
        "sizeList": [
            {
                "id": "1b31d158-1107-40d6-8006-3dece31db4ee"
            },
            {
                "id": "2f648fc7-a612-46c7-8aca-18ca5fac3d53"
            }
        ],
        "displayValue": "M29: 2: S/M,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "04ca922d-046b-45b6-9db7-7d8da92ebfce",
        "sizeRangeCode": "M29: 3: M-XL",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "M-XL",
        "sizeList": [
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c89264d7-a7f6-4b98-9e12-30dfa012195f"
            }
        ],
        "displayValue": "M29: 3: M-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8a53076b-4863-46da-9e9b-99e7fe001fa8",
        "sizeRangeCode": "M29: 3: S-L",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "S-L",
        "sizeList": [
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 3: S-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "458c57b5-fd70-42ac-a019-82f37757c503",
        "sizeRangeCode": "M29: 4: S-XL",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "S-XL",
        "sizeList": [
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c89264d7-a7f6-4b98-9e12-30dfa012195f"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 4: S-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "10d57e83-fcd2-4dfc-b0af-d5a81491dd13",
        "sizeRangeCode": "M29: 4: XS-L",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XS-L",
        "sizeList": [
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c3a9a3a3-080b-4d60-8049-b5ffe7627e9d"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 4: XS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a2d70785-f4ca-4e82-9468-9af8108b186d",
        "sizeRangeCode": "M29: 5: XXS-L",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XXS-L",
        "sizeList": [
            {
                "id": "1451719d-705b-435a-9069-c4da2af445cb"
            },
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c3a9a3a3-080b-4d60-8049-b5ffe7627e9d"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 5: XXS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "aa3c5715-b543-4882-a36c-e0c0ef60f8d0",
        "sizeRangeCode": "M29: 6: XS-XXL",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XS-XXL",
        "sizeList": [
            {
                "id": "381cc7eb-8a20-4f7e-a0cc-fb8ccbc3b370"
            },
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c3a9a3a3-080b-4d60-8049-b5ffe7627e9d"
            },
            {
                "id": "c89264d7-a7f6-4b98-9e12-30dfa012195f"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 6: XS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2f39e5e0-0bcb-4334-9851-fd1926136e16",
        "sizeRangeCode": "M29: 6: XXS/XS,XS/S,S/M,M/L,L/XL,2X/3X",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XXS/XS,XS/S,S/M,M/L,L/XL,2X/3X",
        "sizeList": [
            {
                "id": "01793cd7-4629-4894-8e22-803b4a2eb11f"
            },
            {
                "id": "1b31d158-1107-40d6-8006-3dece31db4ee"
            },
            {
                "id": "2f648fc7-a612-46c7-8aca-18ca5fac3d53"
            },
            {
                "id": "7948e456-b3ad-4723-9929-a8c0ac7bde2d"
            },
            {
                "id": "ab543535-a2cb-4b16-8d62-9463a0d434f3"
            },
            {
                "id": "e1903b05-7379-4e13-bc99-58245aa33c1b"
            }
        ],
        "displayValue": "M29: 6: XXS/XS,XS/S,S/M,M/L,L/XL,2X/3X",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4892a578-7cd1-40a3-ab6b-ca2c57a6a257",
        "sizeRangeCode": "M29: 7: XXS-XXL",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XXS-XXL",
        "sizeList": [
            {
                "id": "1451719d-705b-435a-9069-c4da2af445cb"
            },
            {
                "id": "381cc7eb-8a20-4f7e-a0cc-fb8ccbc3b370"
            },
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c3a9a3a3-080b-4d60-8049-b5ffe7627e9d"
            },
            {
                "id": "c89264d7-a7f6-4b98-9e12-30dfa012195f"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 7: XXS-XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "88a58dbd-64ac-4e76-9517-c5412aff5006",
        "sizeRangeCode": "M29: 8: XXS-3X",
        "sizeModelId": "158bc95f-decc-4b4b-9ec6-330e557d55b4",
        "description": "XXS-3X",
        "sizeList": [
            {
                "id": "1451719d-705b-435a-9069-c4da2af445cb"
            },
            {
                "id": "381cc7eb-8a20-4f7e-a0cc-fb8ccbc3b370"
            },
            {
                "id": "56d95c3f-65fe-4484-b4e8-9bc1e3be80cd"
            },
            {
                "id": "5a829237-5971-4b2a-a4d4-9417e96d60bc"
            },
            {
                "id": "94c97ea9-efb5-47ea-9fb7-3b2b43c31ff6"
            },
            {
                "id": "c3a9a3a3-080b-4d60-8049-b5ffe7627e9d"
            },
            {
                "id": "c89264d7-a7f6-4b98-9e12-30dfa012195f"
            },
            {
                "id": "f6848073-f32d-4e19-8e5a-683b0bd234c4"
            }
        ],
        "displayValue": "M29: 8: XXS-3X",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c7ee5b04-b4d0-4d7f-8d3a-afaa0f3251ae",
        "sizeRangeCode": "M30: 10: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG, 18 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG, 18 REG",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 10: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG, 18 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4d7a0e03-734b-41ab-8e9d-39be204e31cc",
        "sizeRangeCode": "M30: 10: 00-16 REG EVEN",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-16 REG EVEN",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 10: 00-16 REG EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "581dfe84-4c30-43e6-af60-b14224d045b6",
        "sizeRangeCode": "M30: 12: 00-20 Reg",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-20 Reg",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 12: 00-20 Reg",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "acb42649-adcf-4a1b-9a11-467919165abc",
        "sizeRangeCode": "M30: 15: 24-28,30,32,33 REG, 25-28,30 SHORT, 28,30 LONG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "24-28,30,32,33 REG, 25-28,30 SHORT, 28,30 LONG",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "29a84973-1ca1-4271-b87b-0d6b15d70aee"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "35053fb8-7f1c-4a41-9b57-06d2b504515e"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "6b391e34-184b-4644-be33-2ffdade61c5d"
            },
            {
                "id": "6b7889f2-fe15-4ffe-b1f9-52a98f996b41"
            },
            {
                "id": "8502191f-4f2a-4ba9-be9a-71188fd3c991"
            },
            {
                "id": "a768f8f6-9bcb-499d-8ba6-4d3d0a8075dc"
            },
            {
                "id": "a95b74e7-d6c8-4cc8-8122-4d9a26c6dec7"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "ac12b462-e457-4a8e-98fe-ce7b1c91e4de"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            },
            {
                "id": "ddffe02b-9f9d-4b1a-bcb9-c0cf8b9fe010"
            },
            {
                "id": "e1d8eca8-049f-4c35-a00f-4079466b65c5"
            }
        ],
        "displayValue": "M30: 15: 24-28,30,32,33 REG, 25-28,30 SHORT, 28,30 LONG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7734fd1a-46b4-482d-9670-4b8dd5a1537b",
        "sizeRangeCode": "M30: 15: 25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "29a84973-1ca1-4271-b87b-0d6b15d70aee"
            },
            {
                "id": "35053fb8-7f1c-4a41-9b57-06d2b504515e"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "599f74f1-5a99-4c2b-8ded-35dac18a74e6"
            },
            {
                "id": "5c78607b-5a31-4d5b-bfc6-f40dd06d794c"
            },
            {
                "id": "6b391e34-184b-4644-be33-2ffdade61c5d"
            },
            {
                "id": "6b7889f2-fe15-4ffe-b1f9-52a98f996b41"
            },
            {
                "id": "a95b74e7-d6c8-4cc8-8122-4d9a26c6dec7"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "ac12b462-e457-4a8e-98fe-ce7b1c91e4de"
            },
            {
                "id": "b6f4db7d-bb45-4112-9614-43c768178c3b"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            },
            {
                "id": "ddffe02b-9f9d-4b1a-bcb9-c0cf8b9fe010"
            },
            {
                "id": "e1d8eca8-049f-4c35-a00f-4079466b65c5"
            }
        ],
        "displayValue": "M30: 15: 25REG, 26REG,27SHORT,27REG,28SHORT,28REG,28LONG, 30SHORT,30REG,30LONG, 32SHORT, 32REG, 32LONG,33REG, 34REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "56b86897-9443-44ad-9c17-bedf189a0c2b",
        "sizeRangeCode": "M30: 16: 22-29 REG, 22-29 SHORT",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "22-29 REG, 22-29 SHORT",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "235f7ff7-1aeb-45cd-b40d-10d9c8cb9fba"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "35053fb8-7f1c-4a41-9b57-06d2b504515e"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "6e9d2240-c9a4-41be-ba1d-8b54c8e88076"
            },
            {
                "id": "75d9ce17-ad31-4270-a1e3-22eff1b8d66f"
            },
            {
                "id": "8502191f-4f2a-4ba9-be9a-71188fd3c991"
            },
            {
                "id": "8b9ed74f-933e-4fd8-9d23-7c124eafcbc2"
            },
            {
                "id": "8e09370b-1277-4dd0-a495-959497cfe54e"
            },
            {
                "id": "a768f8f6-9bcb-499d-8ba6-4d3d0a8075dc"
            },
            {
                "id": "a95b74e7-d6c8-4cc8-8122-4d9a26c6dec7"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "bb6da45c-526e-4a2a-ad54-ed064b2b39ae"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            }
        ],
        "displayValue": "M30: 16: 22-29 REG, 22-29 SHORT",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "49c67848-a3c1-416e-a55a-bb4ba29eb4d2",
        "sizeRangeCode": "M30: 16: 22-29 REG, 22-29SHORT",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "22-29 REG, 22-29SHORT",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "235f7ff7-1aeb-45cd-b40d-10d9c8cb9fba"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "35053fb8-7f1c-4a41-9b57-06d2b504515e"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "6e9d2240-c9a4-41be-ba1d-8b54c8e88076"
            },
            {
                "id": "75d9ce17-ad31-4270-a1e3-22eff1b8d66f"
            },
            {
                "id": "8502191f-4f2a-4ba9-be9a-71188fd3c991"
            },
            {
                "id": "8b9ed74f-933e-4fd8-9d23-7c124eafcbc2"
            },
            {
                "id": "8e09370b-1277-4dd0-a495-959497cfe54e"
            },
            {
                "id": "a768f8f6-9bcb-499d-8ba6-4d3d0a8075dc"
            },
            {
                "id": "a95b74e7-d6c8-4cc8-8122-4d9a26c6dec7"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "bb6da45c-526e-4a2a-ad54-ed064b2b39ae"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            }
        ],
        "displayValue": "M30: 16: 22-29 REG, 22-29SHORT",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7cec03ad-b8f9-4399-baaf-b214352695e5",
        "sizeRangeCode": "M30: 17: 00-16 REG Even, 0-12SHORT Even",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-16 REG Even, 0-12SHORT Even",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "e5faa56e-f493-4434-8f04-0cbff0815282"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 17: 00-16 REG Even, 0-12SHORT Even",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "81c7c2a1-8961-4be0-b84f-3074cac7943a",
        "sizeRangeCode": "M30: 22: 00-16 REG, 0-12 SHORT, 4-12 LONG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-16 REG, 0-12 SHORT, 4-12 LONG",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "06382cef-f15f-4da7-88d7-0e530eb097f2"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165d805f-50f1-40fa-b5ce-9d2f2adf9ce7"
            },
            {
                "id": "2e1d407f-672f-4272-b581-e1bf5970399f"
            },
            {
                "id": "4bb1e206-17ac-49a7-9d50-66d42f178be7"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "55961fef-8a21-4adc-ae33-27d02310b20b"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "e5faa56e-f493-4434-8f04-0cbff0815282"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 22: 00-16 REG, 0-12 SHORT, 4-12 LONG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e42a95a3-5217-40d0-9d02-39b096ec8862",
        "sizeRangeCode": "M30: 23: 0 REG,00 REG,2 REG,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,16 REG,18 REG,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,00 REG,2 REG,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,16 REG,18 REG,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 23: 0 REG,00 REG,2 REG,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,16 REG,18 REG,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ddf8eda6-8e40-4c45-a34c-006d158f1edc",
        "sizeRangeCode": "M30: 23: 00 REG,0 REG,0 Short,2 REG,2 Short,2 LONG,4 REG,4 Short,4 LONG,6 REG,6 Short,6 LONG,8 REG,8 Short,8 LONG,10 REG,10 Short,10 LONG,12 REG,12 Short,12 LONG,14 REG,16 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00 REG,0 REG,0 Short,2 REG,2 Short,2 LONG,4 REG,4 Short,4 LONG,6 REG,6 Short,6 LONG,8 REG,8 Short,8 LONG,10 REG,10 Short,10 LONG,12 REG,12 Short,12 LONG,14 REG,16 REG",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "06382cef-f15f-4da7-88d7-0e530eb097f2"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165d805f-50f1-40fa-b5ce-9d2f2adf9ce7"
            },
            {
                "id": "2e1d407f-672f-4272-b581-e1bf5970399f"
            },
            {
                "id": "4bb1e206-17ac-49a7-9d50-66d42f178be7"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "55961fef-8a21-4adc-ae33-27d02310b20b"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "5dd3fcc8-4471-4524-b95d-9e3b3055416a"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "e5faa56e-f493-4434-8f04-0cbff0815282"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 23: 00 REG,0 REG,0 Short,2 REG,2 Short,2 LONG,4 REG,4 Short,4 LONG,6 REG,6 Short,6 LONG,8 REG,8 Short,8 LONG,10 REG,10 Short,10 LONG,12 REG,12 Short,12 LONG,14 REG,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "484c5e52-ae3f-4b7d-9386-14384e2279e6",
        "sizeRangeCode": "M30: 23: 00-20 REG EVEN, 4-12 TALL EVEN, 0-10 PETITE EVEN",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-20 REG EVEN, 4-12 TALL EVEN, 0-10 PETITE EVEN",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 23: 00-20 REG EVEN, 4-12 TALL EVEN, 0-10 PETITE EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2fc40dd3-8e8f-406e-9186-2c8078e66817",
        "sizeRangeCode": "M30: 24: 2 TALL,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,24 REG,26 REG,27 REG,28 REG,29 REG,30 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,31 REG,32 REG,33 REG,34 REG,35 REG,25 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "2 TALL,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,24 REG,26 REG,27 REG,28 REG,29 REG,30 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,31 REG,32 REG,33 REG,34 REG,35 REG,25 REG",
        "sizeList": [
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "44c9e193-10f2-4e5f-9869-6a9044e14a8b"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "4ffc73c3-7e62-4e5a-97cb-654d3244bd94"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "5c78607b-5a31-4d5b-bfc6-f40dd06d794c"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "6b391e34-184b-4644-be33-2ffdade61c5d"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "ac12b462-e457-4a8e-98fe-ce7b1c91e4de"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            },
            {
                "id": "ddffe02b-9f9d-4b1a-bcb9-c0cf8b9fe010"
            },
            {
                "id": "f922f195-327f-4c7b-8a77-2757e28e0001"
            }
        ],
        "displayValue": "M30: 24: 2 TALL,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,24 REG,26 REG,27 REG,28 REG,29 REG,30 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,31 REG,32 REG,33 REG,34 REG,35 REG,25 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ba7b3b68-c1c7-443c-9e51-3f6b47d7b4de",
        "sizeRangeCode": "M30: 24: 2-12 TALL EVEN, 25-35 REG, 0-10 PETITE ",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "2-12 TALL EVEN, 25-35 REG, 0-10 PETITE ",
        "sizeList": [
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "44c9e193-10f2-4e5f-9869-6a9044e14a8b"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "4ffc73c3-7e62-4e5a-97cb-654d3244bd94"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "5c78607b-5a31-4d5b-bfc6-f40dd06d794c"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "6b391e34-184b-4644-be33-2ffdade61c5d"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "ac12b462-e457-4a8e-98fe-ce7b1c91e4de"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            },
            {
                "id": "ddffe02b-9f9d-4b1a-bcb9-c0cf8b9fe010"
            },
            {
                "id": "f922f195-327f-4c7b-8a77-2757e28e0001"
            }
        ],
        "displayValue": "M30: 24: 2-12 TALL EVEN, 25-35 REG, 0-10 PETITE ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1f07c99d-5e43-4e02-857f-129d6b8fd79e",
        "sizeRangeCode": "M30: 26: 00-20Reg, 00-10Petite, 4-16Tall",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-20Reg, 00-10Petite, 4-16Tall",
        "sizeList": [
            {
                "id": "02aaec72-afee-4073-81f5-67d3e8850829"
            },
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "bd063dc3-5edf-403b-afff-c288b228d704"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "cadfc1a8-9bcb-4939-87ab-e085f2d8c03f"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 26: 00-20Reg, 00-10Petite, 4-16Tall",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f8800ba2-74c7-45fb-b0b2-d63d6507adfe",
        "sizeRangeCode": "M30: 28: 00-20 Reg; 4-16 Tall; 00-14 Petite",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00-20 Reg; 4-16 Tall; 00-14 Petite",
        "sizeList": [
            {
                "id": "02aaec72-afee-4073-81f5-67d3e8850829"
            },
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c46aae1-872c-4a4a-8271-3858cced2983"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "bd063dc3-5edf-403b-afff-c288b228d704"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "cadfc1a8-9bcb-4939-87ab-e085f2d8c03f"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "f59f7f76-6b4d-4c3a-832a-b317319d8cbc"
            }
        ],
        "displayValue": "M30: 28: 00-20 Reg; 4-16 Tall; 00-14 Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6e3cd168-3f2a-4bff-8d99-89393da2223a",
        "sizeRangeCode": "M30: 30: 0-16 Short; 0-18 Reg; 2-18 Long",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0-16 Short; 0-18 Reg; 2-18 Long",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "06382cef-f15f-4da7-88d7-0e530eb097f2"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165d805f-50f1-40fa-b5ce-9d2f2adf9ce7"
            },
            {
                "id": "2173cdaa-fbe1-4c12-a183-6eb31f223000"
            },
            {
                "id": "22a18bc8-2bae-4e93-b2c1-5e136b3d1b04"
            },
            {
                "id": "2e1d407f-672f-4272-b581-e1bf5970399f"
            },
            {
                "id": "434639d9-bed4-4b3d-ada4-ca7ca7618462"
            },
            {
                "id": "4bb1e206-17ac-49a7-9d50-66d42f178be7"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "4c141515-c22f-4a1a-a241-ec84c746e9c2"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "55961fef-8a21-4adc-ae33-27d02310b20b"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "5dd3fcc8-4471-4524-b95d-9e3b3055416a"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8267973f-c05d-4f85-b338-e6b0783b605d"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "e5faa56e-f493-4434-8f04-0cbff0815282"
            },
            {
                "id": "f08ead0e-b6fe-46f4-81d0-fb941e890160"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 30: 0-16 Short; 0-18 Reg; 2-18 Long",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "392cfedd-f641-4a8a-891d-d68c3c77f73b",
        "sizeRangeCode": "M30: 35: 0 REG,0 TALL,00 REG,00 TALL,2 REG,2 TALL,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,14 TALL,16 REG,16 TALL,18 REG,18 TALL,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,12PETIT,14PETIT,16PETIT,18PETIT,20PETIT,00PETIT,",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,0 TALL,00 REG,00 TALL,2 REG,2 TALL,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,14 TALL,16 REG,16 TALL,18 REG,18 TALL,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,12PETIT,14PETIT,16PETIT,18PETIT,20PETIT,00PETIT,",
        "sizeList": [
            {
                "id": "02aaec72-afee-4073-81f5-67d3e8850829"
            },
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "0e9cbe98-65aa-4837-a19b-837780093fc3"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "31040d0b-582b-4687-b39a-e845ac973aca"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c32f09e-ed27-4a7d-a51d-efc7520fc6ac"
            },
            {
                "id": "9c46aae1-872c-4a4a-8271-3858cced2983"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "bd063dc3-5edf-403b-afff-c288b228d704"
            },
            {
                "id": "bf963f00-c1c6-4030-942f-694a322a6cc3"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "cadfc1a8-9bcb-4939-87ab-e085f2d8c03f"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "d8a0a33e-8a39-4ea5-b709-052cb3df14ef"
            },
            {
                "id": "e6c1140a-7576-41be-a0ab-28742cfaa186"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "f59f7f76-6b4d-4c3a-832a-b317319d8cbc"
            },
            {
                "id": "f922f195-327f-4c7b-8a77-2757e28e0001"
            }
        ],
        "displayValue": "M30: 35: 0 REG,0 TALL,00 REG,00 TALL,2 REG,2 TALL,4 REG,4 TALL,6 REG,6 TALL,8 REG,8 TALL,10 REG,10 TALL,12 REG,12 TALL,14 REG,14 TALL,16 REG,16 TALL,18 REG,18 TALL,20 REG,0PETIT,2PETIT,4PETIT,6PETIT,8PETIT,10PETIT,12PETIT,14PETIT,16PETIT,18PETIT,20PETIT,00PETIT,",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bfd92fad-9e88-4c4a-821c-e0919e9b35af",
        "sizeRangeCode": "M30: 42: 0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 20 REG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 00PETIT",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 20 REG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 00PETIT",
        "sizeList": [
            {
                "id": "02aaec72-afee-4073-81f5-67d3e8850829"
            },
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "06382cef-f15f-4da7-88d7-0e530eb097f2"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165d805f-50f1-40fa-b5ce-9d2f2adf9ce7"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "2173cdaa-fbe1-4c12-a183-6eb31f223000"
            },
            {
                "id": "22a18bc8-2bae-4e93-b2c1-5e136b3d1b04"
            },
            {
                "id": "2e1d407f-672f-4272-b581-e1bf5970399f"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4bb1e206-17ac-49a7-9d50-66d42f178be7"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "55961fef-8a21-4adc-ae33-27d02310b20b"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "5dd3fcc8-4471-4524-b95d-9e3b3055416a"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8267973f-c05d-4f85-b338-e6b0783b605d"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "bd063dc3-5edf-403b-afff-c288b228d704"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "cadfc1a8-9bcb-4939-87ab-e085f2d8c03f"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f08ead0e-b6fe-46f4-81d0-fb941e890160"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 42: 0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 20 REG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 00PETIT",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "85fef07e-0126-485b-a8c4-34257f21c218",
        "sizeRangeCode": "M30: 46: 0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 18 LONG, 20 REG, 20 LONG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 12PETIT, 14PETIT, 00PETIT",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 18 LONG, 20 REG, 20 LONG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 12PETIT, 14PETIT, 00PETIT",
        "sizeList": [
            {
                "id": "02aaec72-afee-4073-81f5-67d3e8850829"
            },
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "06382cef-f15f-4da7-88d7-0e530eb097f2"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "165d805f-50f1-40fa-b5ce-9d2f2adf9ce7"
            },
            {
                "id": "165fd2ec-2771-4342-8064-78cf7b8fdb74"
            },
            {
                "id": "2173cdaa-fbe1-4c12-a183-6eb31f223000"
            },
            {
                "id": "22a18bc8-2bae-4e93-b2c1-5e136b3d1b04"
            },
            {
                "id": "2e1d407f-672f-4272-b581-e1bf5970399f"
            },
            {
                "id": "32074bda-8a67-4027-be69-eb37e59c54f4"
            },
            {
                "id": "33d323e5-d09f-4c88-8d20-b4836a1d5d6e"
            },
            {
                "id": "4bb1e206-17ac-49a7-9d50-66d42f178be7"
            },
            {
                "id": "4bb22e2f-79ae-4490-9d10-34a311fb480f"
            },
            {
                "id": "4c141515-c22f-4a1a-a241-ec84c746e9c2"
            },
            {
                "id": "4f958fd9-a900-41f5-9297-c966d014a3da"
            },
            {
                "id": "5278f4d5-1247-40b5-95fc-efa7ea2fb527"
            },
            {
                "id": "53514b9c-7e39-41f4-9f33-2e99628f3498"
            },
            {
                "id": "55961fef-8a21-4adc-ae33-27d02310b20b"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "5dd3fcc8-4471-4524-b95d-9e3b3055416a"
            },
            {
                "id": "6442b04f-ad6d-4813-9bec-b99dcbc1670f"
            },
            {
                "id": "67c8a79a-0869-43ab-890d-468675891e52"
            },
            {
                "id": "6cee89f3-116c-4b9c-a3ac-364290ee2b8b"
            },
            {
                "id": "71e56bd1-f401-47fd-b815-0f4a25c40454"
            },
            {
                "id": "72cb2ec2-09d6-42eb-9d45-93f4226ca3fe"
            },
            {
                "id": "8267973f-c05d-4f85-b338-e6b0783b605d"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9c4331a4-c510-43d3-81a5-2e05ae6944b8"
            },
            {
                "id": "9c46aae1-872c-4a4a-8271-3858cced2983"
            },
            {
                "id": "9e4c99dc-743b-461a-af63-b5b61ec5ae84"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "aa6dfc03-98d3-43b4-bf26-7792d8b97791"
            },
            {
                "id": "b58fae20-e4b2-4b3e-bb30-6f1bf84145df"
            },
            {
                "id": "b9712ae9-13d5-4c90-91ae-c7109a9bb107"
            },
            {
                "id": "bd063dc3-5edf-403b-afff-c288b228d704"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "cadfc1a8-9bcb-4939-87ab-e085f2d8c03f"
            },
            {
                "id": "d0f65ff7-a86f-4738-9bf8-1149ed0c6363"
            },
            {
                "id": "d696fe1e-b51f-42a9-87e2-3dc3d7c6c3db"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f08ead0e-b6fe-46f4-81d0-fb941e890160"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            },
            {
                "id": "f59f7f76-6b4d-4c3a-832a-b317319d8cbc"
            },
            {
                "id": "fbac82c4-d3ee-486c-bc44-3edaff9f3876"
            }
        ],
        "displayValue": "M30: 46: 0 REG, 00 REG, 2 SHORT, 2 REG, 2 LONG, 4 SHORT, 4 REG, 4 LONG, 4 TALL, 6 SHORT, 6 REG, 6 LONG, 6 TALL, 8 SHORT, 8 REG, 8 LONG, 8 TALL, 10SHORT, 10 REG, 10 LONG, 10 TALL, 12SHORT, 12 REG, 12 LONG, 12 TALL, 14SHORT, 14 REG, 14 LONG, 14 TALL, 16SHORT, 16 REG, 16 LONG, 16 TALL, 18 REG, 18 LONG, 20 REG, 20 LONG, 0PETIT, 2PETIT, 4PETIT, 6PETIT, 8PETIT, 10PETIT, 12PETIT, 14PETIT, 00PETIT",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6d7315fe-4c89-4dd0-ac84-ce9897ad1f46",
        "sizeRangeCode": "M30: 6: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 6: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "049e4f49-29ca-44db-ac92-59731f1ebe38",
        "sizeRangeCode": "M30: 6: 00 REG - 8 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00 REG - 8 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            }
        ],
        "displayValue": "M30: 6: 00 REG - 8 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d0fcdc58-dd43-4660-a70c-b7987e520806",
        "sizeRangeCode": "M30: 6: 24 REG,25 REG,26 REG,28 REG,30 REG,32 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "24 REG,25 REG,26 REG,28 REG,30 REG,32 REG",
        "sizeList": [
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "ac12b462-e457-4a8e-98fe-ce7b1c91e4de"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            },
            {
                "id": "ddffe02b-9f9d-4b1a-bcb9-c0cf8b9fe010"
            }
        ],
        "displayValue": "M30: 6: 24 REG,25 REG,26 REG,28 REG,30 REG,32 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "690daad0-211c-4019-8667-fb7a4e014fd2",
        "sizeRangeCode": "M30: 7: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 7: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5a85a2f6-3ebc-4886-9095-6b7d9ef28274",
        "sizeRangeCode": "M30: 7: 00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 7: 00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "571a7683-c71c-46d5-bb01-f484a45d3603",
        "sizeRangeCode": "M30: 7: 000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "62a88c23-178d-4fe2-9527-dc1c4c1dfe7e"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            }
        ],
        "displayValue": "M30: 7: 000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a9af343b-f2ad-490c-bb87-db400e73c10c",
        "sizeRangeCode": "M30: 7: 000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "4a3f8939-9930-421c-8088-19bf76770516"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            }
        ],
        "displayValue": "M30: 7: 000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8266b48f-0c2c-4f94-85bf-b107ea8df3cd",
        "sizeRangeCode": "M30: 7: 23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "75d9ce17-ad31-4270-a1e3-22eff1b8d66f"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            }
        ],
        "displayValue": "M30: 7: 23REG,24REG,25REG,26REG,27REG,28REG,29REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bf4f717a-27a9-4313-a0f5-49e7c41bcef8",
        "sizeRangeCode": "M30: 8: 0 REG, 2 REG-14 REG EVEN",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG, 2 REG-14 REG EVEN",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 8: 0 REG, 2 REG-14 REG EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "740d458f-fc87-4ed3-b27f-7d04e4dce5fd",
        "sizeRangeCode": "M30: 8: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 8: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0b1e2b4b-2a7e-4c34-bc3c-f222f8495333",
        "sizeRangeCode": "M30: 8: 00 REG, 0 REG-12 REG EVEN ",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "00 REG, 0 REG-12 REG EVEN ",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 8: 00 REG, 0 REG-12 REG EVEN ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c137d5ec-8cc6-457c-bb85-86be0de35a57",
        "sizeRangeCode": "M30: 8: 000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "62a88c23-178d-4fe2-9527-dc1c4c1dfe7e"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 8: 000 REG, 00 REG, 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ffe1e300-e2e1-40bb-bafa-b80b024cd6f3",
        "sizeRangeCode": "M30: 8: 000-10 REG EVEN",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000-10 REG EVEN",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "62a88c23-178d-4fe2-9527-dc1c4c1dfe7e"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 8: 000-10 REG EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4db71efe-38bd-4974-ae4f-9159d48cc2a0",
        "sizeRangeCode": "M30: 8: 22 REG,23 REG,24 REG,25 REG,26 REG,27 REG,28 REG,29 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "22 REG,23 REG,24 REG,25 REG,26 REG,27 REG,28 REG,29 REG",
        "sizeList": [
            {
                "id": "23022324-34b3-421f-9b54-e4b5e9b8149e"
            },
            {
                "id": "235f7ff7-1aeb-45cd-b40d-10d9c8cb9fba"
            },
            {
                "id": "3119440e-2f8c-4634-8169-204daaeeccd7"
            },
            {
                "id": "47de1bec-62bd-411b-bc74-220d18e419c0"
            },
            {
                "id": "544b4bb4-d196-4dc4-9f54-8fcac53e3d32"
            },
            {
                "id": "75d9ce17-ad31-4270-a1e3-22eff1b8d66f"
            },
            {
                "id": "aa800151-508d-4c4a-9a48-a556155778da"
            },
            {
                "id": "d8f204e1-0a5c-478f-be3f-8c99a5f6cc83"
            }
        ],
        "displayValue": "M30: 8: 22 REG,23 REG,24 REG,25 REG,26 REG,27 REG,28 REG,29 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4fed8d72-6308-402a-9ac1-035bf75c65a5",
        "sizeRangeCode": "M30: 9: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeList": [
            {
                "id": "04d5c2df-cd05-4628-88dd-3faa7a1bc25c"
            },
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "d89a588d-014a-4de7-9c18-434694ed7735"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 9: 0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "68909d07-26ca-4412-b24a-e4bc2d033281",
        "sizeRangeCode": "M30: 9: 000 REG - 12 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000 REG - 12 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "62a88c23-178d-4fe2-9527-dc1c4c1dfe7e"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 9: 000 REG - 12 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3539612a-a1ba-45f6-a559-37d228596144",
        "sizeRangeCode": "M30: 9: 000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "sizeModelId": "36deac21-ea10-4b93-8501-f9f618e3af13",
        "description": "000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "sizeList": [
            {
                "id": "13519024-1fff-4dd8-bd47-d5c8aefc215f"
            },
            {
                "id": "4a3f8939-9930-421c-8088-19bf76770516"
            },
            {
                "id": "5bd20d96-ee81-46eb-8195-1f22013463c3"
            },
            {
                "id": "8aec486a-1901-46f6-86ab-cff90aeb9e4b"
            },
            {
                "id": "9ff8cf28-d446-4a52-9350-868ce5db5d49"
            },
            {
                "id": "a691ed6f-d97c-4866-9953-7788a57f8a77"
            },
            {
                "id": "c345517b-b6e8-4f1b-a9e5-a3a3894a8a72"
            },
            {
                "id": "c4ddbbd6-9425-4b2f-8969-ff7f39d64789"
            },
            {
                "id": "f30d85e7-e657-4717-964e-83e0e77ec06a"
            }
        ],
        "displayValue": "M30: 9: 000 REG,00 REG,0 REG,2 REG,4 REG,6 REG,8 REG,10 REG,12 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4f4b6980-6b07-4559-bf20-39fef49c7009",
        "sizeRangeCode": "M32: 14: 28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,33R,34R,36R,38R",
        "sizeModelId": "716016ae-68dd-4406-88ef-004f8c873705",
        "description": "28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,33R,34R,36R,38R",
        "sizeList": [
            {
                "id": "1ae0520d-4fa7-480f-bb39-7f99ecbdc3ec"
            },
            {
                "id": "1f649509-383b-4791-a43a-6109328fd4a4"
            },
            {
                "id": "36de7fd1-7322-4c96-85a1-23606e751c04"
            },
            {
                "id": "6bff267c-b283-427e-9f93-97097511af72"
            },
            {
                "id": "6f4768f6-0477-47ea-a70d-33391473d7bf"
            },
            {
                "id": "77af6795-b85a-49f8-a178-5a066e0a825c"
            },
            {
                "id": "9316144a-6e1a-40b8-a505-10200ba88401"
            },
            {
                "id": "9483f94f-9722-4747-9b93-02c4cc9e55dd"
            },
            {
                "id": "b4de8800-47ea-4246-89a0-9f4e5659fe26"
            },
            {
                "id": "cab35c54-3ba7-42b5-8147-306fed8fdc96"
            },
            {
                "id": "d771a4b3-81b9-4007-a45f-baf5140953ea"
            },
            {
                "id": "e66599e1-0453-4a2f-89ad-75f4b24fbc9b"
            },
            {
                "id": "e976d0d6-f7fc-4a7e-885e-82e2b11c737d"
            },
            {
                "id": "f5df3b11-f920-436a-be3e-8a6d37633053"
            }
        ],
        "displayValue": "M32: 14: 28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,33R,34R,36R,38R",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2b595cd1-4447-4063-bd44-4a56c0364cc8",
        "sizeRangeCode": "M32: 18: 28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,32L,33R,34R,34L,36R,36L,38R,38L",
        "sizeModelId": "716016ae-68dd-4406-88ef-004f8c873705",
        "description": "28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,32L,33R,34R,34L,36R,36L,38R,38L",
        "sizeList": [
            {
                "id": "1ae0520d-4fa7-480f-bb39-7f99ecbdc3ec"
            },
            {
                "id": "1f649509-383b-4791-a43a-6109328fd4a4"
            },
            {
                "id": "24ce3bb4-37f9-472c-9dba-db6be32dcaf2"
            },
            {
                "id": "36de7fd1-7322-4c96-85a1-23606e751c04"
            },
            {
                "id": "57cc8acc-ac6d-44bd-9f02-d1c7b80deb7f"
            },
            {
                "id": "643b6907-897f-487e-b6d5-38548e2befde"
            },
            {
                "id": "6bff267c-b283-427e-9f93-97097511af72"
            },
            {
                "id": "6f4768f6-0477-47ea-a70d-33391473d7bf"
            },
            {
                "id": "77af6795-b85a-49f8-a178-5a066e0a825c"
            },
            {
                "id": "9316144a-6e1a-40b8-a505-10200ba88401"
            },
            {
                "id": "9483f94f-9722-4747-9b93-02c4cc9e55dd"
            },
            {
                "id": "adba3630-316d-4771-a2fe-de1b7e6b2d36"
            },
            {
                "id": "b4de8800-47ea-4246-89a0-9f4e5659fe26"
            },
            {
                "id": "cab35c54-3ba7-42b5-8147-306fed8fdc96"
            },
            {
                "id": "d771a4b3-81b9-4007-a45f-baf5140953ea"
            },
            {
                "id": "e66599e1-0453-4a2f-89ad-75f4b24fbc9b"
            },
            {
                "id": "e976d0d6-f7fc-4a7e-885e-82e2b11c737d"
            },
            {
                "id": "f5df3b11-f920-436a-be3e-8a6d37633053"
            }
        ],
        "displayValue": "M32: 18: 28S,28R,29S,29R,30S,30R,31S,31R,32S,32R,32L,33R,34R,34L,36R,36L,38R,38L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2bdf5f47-2b15-4c60-a903-7e44e419a92d",
        "sizeRangeCode": "M35: 10: 4-18",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4-18",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "a975c2c4-b94d-4b7f-b9c3-dcb625d4ec07"
            },
            {
                "id": "e58e514c-150d-4315-9185-78be01731467"
            }
        ],
        "displayValue": "M35: 10: 4-18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8bfb28cb-c1f7-463d-8da9-469a22d8be9b",
        "sizeRangeCode": "M35: 11: 5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG",
        "sizeList": [
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 11: 5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c95e3e7e-fff2-4922-8896-74b8387a3316",
        "sizeRangeCode": "M35: 13: 5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeList": [
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 13: 5 REG,6 SLIM,6 REG,7 SLIM,7 REG,8 SLIM,8 REG,10 SLIM,10 REG,12 REG,14 REG,16 REG,18 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1b1f7724-723c-4fb5-8ec9-893d10c7ba6e",
        "sizeRangeCode": "M35: 16: 4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "e58e514c-150d-4315-9185-78be01731467"
            }
        ],
        "displayValue": "M35: 16: 4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1e5c3ad6-d4a0-416d-8e25-211d14123441",
        "sizeRangeCode": "M35: 16: 4-8,10-16 EVEN, 6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4-8,10-16 EVEN, 6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "e58e514c-150d-4315-9185-78be01731467"
            }
        ],
        "displayValue": "M35: 16: 4-8,10-16 EVEN, 6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "92d13e1e-b5c6-40c3-8503-136858782b7a",
        "sizeRangeCode": "M35: 21: 5 SLIM,5 REG,6 SLIM,6 REG,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 SLIM,5 REG,6 SLIM,6 REG,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 21: 5 SLIM,5 REG,6 SLIM,6 REG,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "317676bf-e100-4634-ac1b-4fb3e2c5e856",
        "sizeRangeCode": "M35: 22: 5 SLIM,5 REG,6 SLIM,6 REG,6 HUSKY,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 SLIM,5 REG,6 SLIM,6 REG,6 HUSKY,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 22: 5 SLIM,5 REG,6 SLIM,6 REG,6 HUSKY,7 SLIM,7 REG,7 HUSKY,8 SLIM,8 REG,8 HUSKY,10 SLIM,10 REG,10HUSKY,12 SLIM,12 REG,12HUSKY,14 SLIM,14 REG,14HUSKY,16 SLIM,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0a317616-9a65-4546-ac62-7af27767d1a1",
        "sizeRangeCode": "M35: 23: 5 SLIM-16 SLIM, 6 HUSKY-16 HUSKY, 5 REG-16 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 SLIM-16 SLIM, 6 HUSKY-16 HUSKY, 5 REG-16 REG",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 23: 5 SLIM-16 SLIM, 6 HUSKY-16 HUSKY, 5 REG-16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b09384e0-f655-4c17-b695-00c22fddbb86",
        "sizeRangeCode": "M35: 24: Woven Bottoms Online",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "Woven Bottoms Online",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 24: Woven Bottoms Online",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dcd8d47b-9312-4466-b0cc-d79b9fba8104",
        "sizeRangeCode": "M35: 26: 5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 26: 5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "28664f34-a7f9-4fd6-8232-87c5a08ea8c1",
        "sizeRangeCode": "M35: 27: 4-18 Reg; 5-18 Slim; 6-18 Husky",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4-18 Reg; 5-18 Slim; 6-18 Husky",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "9a11606e-d03f-438b-95c0-be769b9052bf"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 27: 4-18 Reg; 5-18 Slim; 6-18 Husky",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6be599fe-dca0-4bd3-8bcb-659472ed9e73",
        "sizeRangeCode": "M35: 30: 4,5,6,7,8,10,12,14,16,18,20,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4,5,6,7,8,10,12,14,16,18,20,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3f4fa1ee-b0b0-4b25-a4ce-077c79d7d33f"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "8b467455-e300-4ddd-ae27-d2fc0113ab82"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "a975c2c4-b94d-4b7f-b9c3-dcb625d4ec07"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "d0493ecf-5e2a-49cd-8052-6f503f3c0eb8"
            },
            {
                "id": "e58e514c-150d-4315-9185-78be01731467"
            }
        ],
        "displayValue": "M35: 30: 4,5,6,7,8,10,12,14,16,18,20,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0799af3a-f21f-4ac8-b29f-f8849c43a2a9",
        "sizeRangeCode": "M35: 30: 4REG,5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,20REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4REG,5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,20REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3f4fa1ee-b0b0-4b25-a4ce-077c79d7d33f"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "79a51e7c-0787-4b40-b5c5-a5f9009d0270"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "9a11606e-d03f-438b-95c0-be769b9052bf"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "d0493ecf-5e2a-49cd-8052-6f503f3c0eb8"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 30: 4REG,5REG,6REG,7REG,8REG,10REG,12REG,14REG,16REG,18REG,20REG,5SLIM,6SLIM,7SLIM,8SLIM,10SLIM,12SLIM,14SLIM,16SLIM,18SLIM,20SLIM,6HUSKY,7HUSKY,8HUSKY,10HUSKY,12HUSKY,14HUSKY,16HUSKY,18HUSKY,20HUSKY",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7d5bf7ff-5835-4e90-81b9-27b97c0564c0",
        "sizeRangeCode": "M35: 37: 4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "sizeList": [
            {
                "id": "09ce1b75-332c-4de9-814d-232b3efc2090"
            },
            {
                "id": "0ceb29d4-40bc-469d-9f46-78634f03c363"
            },
            {
                "id": "1fb88dd8-e58d-4bf3-a067-969238ec6c09"
            },
            {
                "id": "20a040a1-840a-4e60-9270-27a2ec1720be"
            },
            {
                "id": "355f96ee-4be8-46e6-ba5f-6b4c1ab23f98"
            },
            {
                "id": "38f8108f-80b7-4938-9712-4b9727578ce9"
            },
            {
                "id": "3c4ae12f-3b85-4e40-a9cd-7a1bfc4cdbd3"
            },
            {
                "id": "3fef8b1e-850e-4422-994f-2fc177672526"
            },
            {
                "id": "410b1e31-4955-4803-b996-5b83ca815a8c"
            },
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "5f3446cd-e2b6-42a5-98af-5d1e5f54363d"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "6bb2155f-69c9-419f-aa23-4d821ce96bf5"
            },
            {
                "id": "77a4592a-5550-483a-a3e0-90f1b0e9dffa"
            },
            {
                "id": "7c9e8639-ad1f-4b5f-97c9-85c16326f1e5"
            },
            {
                "id": "811b4e6d-d414-4269-b5d8-17aa409bcb8e"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8d3ed8c1-fd65-45b8-8cd9-03a11b4764e6"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "91831f16-4213-43e2-81d2-91597f88380e"
            },
            {
                "id": "929c4820-e36a-47c9-a6e9-e05ac85f438c"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "975dd3d3-74f6-4f5b-961e-13cd3147ce00"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "9a11606e-d03f-438b-95c0-be769b9052bf"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "a94286a7-e14f-4245-a408-03ac78fc0605"
            },
            {
                "id": "b3fc9171-81cb-442c-9a17-4c97b3d3276a"
            },
            {
                "id": "b83e2ddd-7725-457b-b6bb-1fd8caa9a015"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "c6b574b5-66e1-45cb-9c6a-30b09145b649"
            },
            {
                "id": "ca6e8d05-afdf-4018-b1ab-747c7fa3df26"
            },
            {
                "id": "ce47e913-11e5-4174-bb64-7e4d940ca0eb"
            },
            {
                "id": "ec0e46d2-24bd-4cc2-a90f-f368afd7e4f2"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            },
            {
                "id": "f62a1e82-e25c-4fc0-bd62-fc6a6ce66f0a"
            },
            {
                "id": "fbca7754-32ab-4532-9892-4b8e7b73aed6"
            }
        ],
        "displayValue": "M35: 37: 4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c4912dc8-733f-45f2-aa21-18bf0d1b98d9",
        "sizeRangeCode": "M35: 5: 8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeList": [
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            }
        ],
        "displayValue": "M35: 5: 8 REG,10 REG,12 REG,14 REG,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "90f13cba-4085-4428-a266-43bff672660e",
        "sizeRangeCode": "M35: 5: 8,10,12,14,16",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "8,10,12,14,16",
        "sizeList": [
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            }
        ],
        "displayValue": "M35: 5: 8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f8c15c0d-6924-4150-8042-2b5a1fb4c13c",
        "sizeRangeCode": "M35: 5: 8,10,12,14,16",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "8,10,12,14,16",
        "sizeList": [
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            }
        ],
        "displayValue": "M35: 5: 8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "93b9d37e-d011-4574-a127-4e627bda99ae",
        "sizeRangeCode": "M35: 6: 5-14",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5-14",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            }
        ],
        "displayValue": "M35: 6: 5-14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "75497aa3-7a45-4517-8ef7-20527ea0a9c5",
        "sizeRangeCode": "M35: 6: 6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "sizeList": [
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            }
        ],
        "displayValue": "M35: 6: 6 REG,8 REG,10 REG,12 REG,14 REG,16 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "54c92a30-abb1-4e0c-afa4-51272e1dc02c",
        "sizeRangeCode": "M35: 6: 8,10,12,14,16,18",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "8,10,12,14,16,18",
        "sizeList": [
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "a975c2c4-b94d-4b7f-b9c3-dcb625d4ec07"
            }
        ],
        "displayValue": "M35: 6: 8,10,12,14,16,18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b32f24bb-b0b7-4707-8e23-607ff20943ab",
        "sizeRangeCode": "M35: 7: 5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG",
        "sizeList": [
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 7: 5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1f9b2ffe-75ab-400c-9eaa-fc8a6cce9c37",
        "sizeRangeCode": "M35: 7: 5-8, 10-14 EVEN",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5-8, 10-14 EVEN",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            }
        ],
        "displayValue": "M35: 7: 5-8, 10-14 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "65a68e6e-aa64-4b12-8ad6-b1eb5d36494a",
        "sizeRangeCode": "M35: 7: 6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeList": [
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            }
        ],
        "displayValue": "M35: 7: 6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "479837e7-c6d8-4d4b-851c-ee955d15b0d6",
        "sizeRangeCode": "M35: 7: 8,10,12,14,16,18,20",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "8,10,12,14,16,18,20",
        "sizeList": [
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "8b467455-e300-4ddd-ae27-d2fc0113ab82"
            },
            {
                "id": "a975c2c4-b94d-4b7f-b9c3-dcb625d4ec07"
            }
        ],
        "displayValue": "M35: 7: 8,10,12,14,16,18,20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d4b6bf8a-8973-4047-a830-ada387210f8d",
        "sizeRangeCode": "M35: 8: 5 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeList": [
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 8: 5 REG,6 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f3250017-fdb8-4c4c-bc55-e90ff5a09034",
        "sizeRangeCode": "M35: 9: 4,5,6,7,8,10,12,14,16",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "4,5,6,7,8,10,12,14,16",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "e58e514c-150d-4315-9185-78be01731467"
            }
        ],
        "displayValue": "M35: 9: 4,5,6,7,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4a39e436-76e2-421a-ad21-fa479822aae9",
        "sizeRangeCode": "M35: 9: 5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "sizeList": [
            {
                "id": "47afedf5-9040-48a6-b51f-c724f2a38122"
            },
            {
                "id": "6b189b7d-7f16-4e57-9f1a-f4978eb44cc2"
            },
            {
                "id": "85fbf4fd-5ca5-4fdb-a864-a30fd9541616"
            },
            {
                "id": "8e3968d2-f771-4e32-b84d-5374c68ce674"
            },
            {
                "id": "942c3d66-6407-4499-96ce-c16ff08e04ed"
            },
            {
                "id": "97a95b52-633d-4a3c-a4fa-42a89975d7ff"
            },
            {
                "id": "a21e8af9-e1cc-4304-a653-99fe36fdc780"
            },
            {
                "id": "bb50a8e9-c5b9-4293-b5d1-855b815902f8"
            },
            {
                "id": "eedd7a10-b9df-4e62-a1b4-b5bd4836d02a"
            }
        ],
        "displayValue": "M35: 9: 5 REG,6 REG,7 REG,8 REG,10 REG,12 REG,14 REG,16 REG,18 REG",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3cc5d9da-e94d-4983-b52f-68ad299d8cbf",
        "sizeRangeCode": "M35: 9: 5,6,7,8,10,12,14,16,18",
        "sizeModelId": "eafac66b-d47c-4d50-a900-f986ff6052c4",
        "description": "5,6,7,8,10,12,14,16,18",
        "sizeList": [
            {
                "id": "058af2b0-ea45-41fe-9b9a-991785b970b3"
            },
            {
                "id": "0bd01c4c-978c-4493-b898-bb7c37f3bcc1"
            },
            {
                "id": "1675e1b9-8e79-4bed-93ae-056b5f571aa6"
            },
            {
                "id": "2b1bd716-7cbe-4012-a4a9-94236030b859"
            },
            {
                "id": "46e034ab-bafe-4f63-9610-93ebff75c577"
            },
            {
                "id": "50d3b1e4-f353-41cb-8c40-be6ba62107bf"
            },
            {
                "id": "8b0a6175-bcbb-45c5-9b6d-47a28e944462"
            },
            {
                "id": "9d527fd9-ce6e-4587-a959-25b5b0f68b66"
            },
            {
                "id": "a975c2c4-b94d-4b7f-b9c3-dcb625d4ec07"
            }
        ],
        "displayValue": "M35: 9: 5,6,7,8,10,12,14,16,18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5bd2d245-c4be-40f3-8ef4-068ed5d25ba0",
        "sizeRangeCode": "M36: 10: 4-18",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4-18",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 10: 4-18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70df9c37-9f4c-4a89-a0fb-27e54334f8b0",
        "sizeRangeCode": "M36: 16: 4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 16: 4,5,6,7,8,10,12,14,16,6 SLIM,7 SLIM,8 SLIM,10 SLIM,12 SLIM,14 SLIM,16 SLIM",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fde1eb79-300e-4153-9c1d-90f155efb088",
        "sizeRangeCode": "M36: 17: 5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,8 SLIM,8 PLUS,10 SLIM,10 PLUS,12 SLIM,12 PLUS,14 PLUS",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,8 SLIM,8 PLUS,10 SLIM,10 PLUS,12 SLIM,12 PLUS,14 PLUS",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 17: 5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,8 SLIM,8 PLUS,10 SLIM,10 PLUS,12 SLIM,12 PLUS,14 PLUS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3095c234-15e9-4c24-a34d-280c75f7c9b4",
        "sizeRangeCode": "M36: 17: 5-8, 10-14 EVEN; 5-8 SLIM, 10 SLIM, 12 SLIM; 8+-14+ EVEN",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5-8, 10-14 EVEN; 5-8 SLIM, 10 SLIM, 12 SLIM; 8+-14+ EVEN",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 17: 5-8, 10-14 EVEN; 5-8 SLIM, 10 SLIM, 12 SLIM; 8+-14+ EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2afa0f26-1c4b-4805-a908-c5ea283840ce",
        "sizeRangeCode": "M36: 18: 5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14+",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14+",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 18: 5,6,7,8,10,12,14,5 SLIM,6 SLIM,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "87d2dffc-cd61-4f24-925b-935ef1140716",
        "sizeRangeCode": "M36: 24: M36: 26: 5-18; 5-16 SLIM, 7-18 PLUS",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "M36: 26: 5-18; 5-16 SLIM, 7-18 PLUS",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "974dc84f-fc12-4300-98a7-9a0c2b1b977f"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "d0989573-906b-45e8-b1cc-54e0f276a8d1"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 24: M36: 26: 5-18; 5-16 SLIM, 7-18 PLUS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1ab162c9-f832-4fb9-b6ab-2c9e74985a93",
        "sizeRangeCode": "M36: 26: 4-18,4-16 SLIM,8-18 PLUS",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4-18,4-16 SLIM,8-18 PLUS",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "7d2fb930-31f5-42b4-91f6-3f79565fb80c"
            },
            {
                "id": "974dc84f-fc12-4300-98a7-9a0c2b1b977f"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "d0989573-906b-45e8-b1cc-54e0f276a8d1"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 26: 4-18,4-16 SLIM,8-18 PLUS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dde03d26-424f-4fa2-b54f-f84e409dbf1e",
        "sizeRangeCode": "M36: 26: 4-18; 5-16 Slim, 7-18 Plus",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4-18; 5-16 Slim, 7-18 Plus",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "974dc84f-fc12-4300-98a7-9a0c2b1b977f"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "d0989573-906b-45e8-b1cc-54e0f276a8d1"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 26: 4-18; 5-16 Slim, 7-18 Plus",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "613c1ef7-17db-481d-8055-cc77a5bd9a35",
        "sizeRangeCode": "M36: 30: 4,5,6,7,8,10,12,14,16,18,20,5 SLIM,6 SLIM,6+,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14 SLIM,14+,16 SLIM,16+,18 SLIM,18+,20 SLIM,20+",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4,5,6,7,8,10,12,14,16,18,20,5 SLIM,6 SLIM,6+,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14 SLIM,14+,16 SLIM,16+,18 SLIM,18+,20 SLIM,20+",
        "sizeList": [
            {
                "id": "0406991a-3d4f-450f-9d9b-f8be65aa77b5"
            },
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "316c2ae8-d55f-44e7-a5df-4131b3f55689"
            },
            {
                "id": "334be98e-afbf-4686-9132-b70b57e7263a"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "3b77d60a-cb06-4b1c-b896-e9a52337e562"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "5bc41f93-baee-441d-80d5-de15a4d67ded"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "974dc84f-fc12-4300-98a7-9a0c2b1b977f"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "d0989573-906b-45e8-b1cc-54e0f276a8d1"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            }
        ],
        "displayValue": "M36: 30: 4,5,6,7,8,10,12,14,16,18,20,5 SLIM,6 SLIM,6+,7 SLIM,7+,8 SLIM,8+,10 SLIM,10+,12 SLIM,12+,14 SLIM,14+,16 SLIM,16+,18 SLIM,18+,20 SLIM,20+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8cb1096b-7671-4b82-89af-45b3da3a481b",
        "sizeRangeCode": "M36: 37: 4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "sizeList": [
            {
                "id": "0488d711-f502-43e9-a684-d84914c5858b"
            },
            {
                "id": "04dacec5-8986-4c7e-b4a6-9225a6838aa9"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "316c2ae8-d55f-44e7-a5df-4131b3f55689"
            },
            {
                "id": "33536c2e-8433-4742-a713-3ede915acc68"
            },
            {
                "id": "38cc7f5a-9a1a-439a-8bf6-c2a560a29dbe"
            },
            {
                "id": "3b77d60a-cb06-4b1c-b896-e9a52337e562"
            },
            {
                "id": "3d063a79-caab-4480-b731-c3f560b55a77"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "4eeb9b4b-d103-4132-a7c5-19d788fed27e"
            },
            {
                "id": "570d0e2c-456e-4518-9dc8-b48e6c0f0557"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "609ead07-1b85-4f25-85ba-48cc52e9f367"
            },
            {
                "id": "63f22881-8c8c-4c48-bd77-330b04bade8c"
            },
            {
                "id": "974dc84f-fc12-4300-98a7-9a0c2b1b977f"
            },
            {
                "id": "9ae159bc-a426-4bfb-b2f1-dda5a8706014"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "ac5ce8cb-f292-47fd-8f56-a227d2e5ca9d"
            },
            {
                "id": "add5b13b-f915-4f2a-88f5-f65e20854d90"
            },
            {
                "id": "afd93a68-caca-4b7f-a2db-3f0eed96cfcb"
            },
            {
                "id": "b97cd354-42b1-46f8-b316-425669da7883"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c26c3528-b33f-4e86-a7a4-271e608c420d"
            },
            {
                "id": "c3048739-102e-493e-a9f1-e77038ed475e"
            },
            {
                "id": "c72f2fe5-039c-4688-8885-1cdc75110239"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "c779b400-80f1-4fd0-8754-e0dcf9e626ad"
            },
            {
                "id": "d0989573-906b-45e8-b1cc-54e0f276a8d1"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            },
            {
                "id": "f5f87bf8-9ce0-4120-b184-4f5e4e47df9d"
            },
            {
                "id": "fafacfdb-dd15-4118-9d31-9aa052c7204f"
            }
        ],
        "displayValue": "M36: 37: 4 REG,4 TALL,5 SLIM,5 REG,5 TALL,6 SLIM,6 REG,6+,6 TALL,7 SLIM,7 REG,7+,7 TALL,8 SLIM,8 REG,8+,8 TALL,10 SLIM,10 REG,10+,10 TALL,12 SLIM,12 REG,12+,12 TALL,14 SLIM,14 REG,14+,14 TALL,16 SLIM,16 REG,16+,16 TALL,18 SLIM,18 REG,18+,18 TALL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ede861de-41c0-4722-9424-d7e68fa6c464",
        "sizeRangeCode": "M36: 3: 6-10",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "6-10",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 3: 6-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7afe4601-0c9f-4b3d-899a-184fd4ccbba6",
        "sizeRangeCode": "M36: 5: 4,6,8,10,12",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4,6,8,10,12",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 5: 4,6,8,10,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2ecffe1b-7e03-418e-827a-98999731d3cc",
        "sizeRangeCode": "M36: 5: 6 -14 EVEN",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "6 -14 EVEN",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 5: 6 -14 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1abcb5f8-55b6-4044-8846-e7cf39c8cd82",
        "sizeRangeCode": "M36: 5: 8/10/12/14/16",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "8/10/12/14/16",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            }
        ],
        "displayValue": "M36: 5: 8/10/12/14/16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3371aded-a766-49e1-817e-7bd3e560d7d7",
        "sizeRangeCode": "M36: 6: 4,6,8,10,12,14",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4,6,8,10,12,14",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 6: 4,6,8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cceb4ad5-1aed-4315-8fdf-e3ffc4b7da2f",
        "sizeRangeCode": "M36: 6: 4-14 no slim",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4-14 no slim",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 6: 4-14 no slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "93bbe1fd-6c4c-450b-a34e-ec3739868ff0",
        "sizeRangeCode": "M36: 6: 5-8,10,12",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5-8,10,12",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 6: 5-8,10,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cb8820c6-195e-4bb6-9f1d-fe97fe3dbc08",
        "sizeRangeCode": "M36: 6: 6,8,10,12,14,16",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 6: 6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "60059088-1783-40dd-beb6-bdfb0ab1fae1",
        "sizeRangeCode": "M36: 6: 6-16 EVEN no slim",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "6-16 EVEN no slim",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 6: 6-16 EVEN no slim",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a95153bf-f99f-42c7-bfda-8e755c4995ba",
        "sizeRangeCode": "M36: 6: 8,10,12,14,16,18",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "8,10,12,14,16,18",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            }
        ],
        "displayValue": "M36: 6: 8,10,12,14,16,18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c8e7d425-e82a-45e5-b4cd-caf13b9110a8",
        "sizeRangeCode": "M36: 7: 5,6,8,10,12,14,16",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5,6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 7: 5,6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0537dbf8-a42b-4d60-9a37-437dad3d452d",
        "sizeRangeCode": "M36: 7: 5/6/7/8/10/12/14",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5/6/7/8/10/12/14",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 7: 5/6/7/8/10/12/14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f966a23b-34ef-4331-b584-6a7c29419a4e",
        "sizeRangeCode": "M36: 7: 8,10,12,14,16,18,20",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "8,10,12,14,16,18,20",
        "sizeList": [
            {
                "id": "0406991a-3d4f-450f-9d9b-f8be65aa77b5"
            },
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            }
        ],
        "displayValue": "M36: 7: 8,10,12,14,16,18,20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f4e61379-014b-4f2b-b71b-29c0e98dabf0",
        "sizeRangeCode": "M36: 8: 6,8,10,12,14,10+,12+,14+",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "6,8,10,12,14,10+,12+,14+",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 8: 6,8,10,12,14,10+,12+,14+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bbc37682-c61c-4752-af47-9bedd6326ebe",
        "sizeRangeCode": "M36: 8: M36: 9: 5-8,10-16 EVEN",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "M36: 9: 5-8,10-16 EVEN",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 8: M36: 9: 5-8,10-16 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f8f8ddf2-8a72-43b3-b6f2-8249bc352132",
        "sizeRangeCode": "M36: 9: 4,6,8,10,12,14,10+,12+,14+",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4,6,8,10,12,14,10+,12+,14+",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d5490fb-b3b1-479e-99f2-5128b94a63e4"
            },
            {
                "id": "606bdbba-33e4-4322-bbf8-c493afdb28d4"
            },
            {
                "id": "9fe9441f-3b40-43e0-818a-4b1307b48df2"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 9: 4,6,8,10,12,14,10+,12+,14+",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2be0107b-adce-40c7-860e-1c4e0d080b7e",
        "sizeRangeCode": "M36: 9: 4-8,10-16 EVEN",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "4-8,10-16 EVEN",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "a5c26769-38e4-4e05-a7d3-5a4212a6b96e"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 9: 4-8,10-16 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "648a112f-21d4-4c6d-8e5b-d786343f6758",
        "sizeRangeCode": "M36: 9: 5/6/7/8/10/12/14/16/18",
        "sizeModelId": "c4ac6be8-1fe1-45c9-80eb-fbe4c8307331",
        "description": "5/6/7/8/10/12/14/16/18",
        "sizeList": [
            {
                "id": "0aee41d2-a55e-4125-ae6f-7cd42cd57b98"
            },
            {
                "id": "129194ce-861a-4830-bce9-11aa2a87b800"
            },
            {
                "id": "2b865c61-2d9f-4c49-abb0-bd51c3a46378"
            },
            {
                "id": "3d2347cc-365d-436c-bd96-3fd8eb2d63b0"
            },
            {
                "id": "5a0b022a-d331-41b7-b58d-c1e7f9ad9870"
            },
            {
                "id": "a0bde4cd-3d89-4350-bf4b-891c9bc0c325"
            },
            {
                "id": "c232a8d7-de3f-4bd1-ba18-872a44c2dc4a"
            },
            {
                "id": "c73ab514-2cd0-498c-bcd2-05b1d9f1e7ab"
            },
            {
                "id": "dc2e4ceb-dfd5-4224-a184-a9356691dc5f"
            }
        ],
        "displayValue": "M36: 9: 5/6/7/8/10/12/14/16/18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "137c311b-3c41-41bf-8493-0e33bdb7fbf9",
        "sizeRangeCode": "M38: 10: 0-18 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-18 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 10: 0-18 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c7ff4c88-6504-473c-ab83-7ffd58dc1aff",
        "sizeRangeCode": "M38: 10: 00,0,2,4,6,8,10,12,14,16",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00,0,2,4,6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 10: 00,0,2,4,6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d55e42a1-5cb6-4053-af35-939429eb1efc",
        "sizeRangeCode": "M38: 10: 00,0,2,4,6,8,10,12,14,16",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00,0,2,4,6,8,10,12,14,16",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "91c582a1-daed-4de3-a652-4ff8bb55c730"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 10: 00,0,2,4,6,8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c103934b-006d-4800-9483-fa6fa8980837",
        "sizeRangeCode": "M38: 10: 1-6, 10-13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1-6, 10-13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 10: 1-6, 10-13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e2d0302f-2029-4b28-9feb-38df24ae6a97",
        "sizeRangeCode": "M38: 10: 24,25,26,27,28,29,30,31,32,33",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "24,25,26,27,28,29,30,31,32,33",
        "sizeList": [
            {
                "id": "0a10b7e1-f34a-4b76-9e16-de751b8bd94a"
            },
            {
                "id": "49caa766-8a85-4c7e-ac1d-93bfef46dd6f"
            },
            {
                "id": "60fbf2e2-0013-4bb5-aab1-2255f104b4cc"
            },
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "9475fae2-9d7c-48e7-9370-95c0615ca08c"
            },
            {
                "id": "970766f6-eb6b-4c41-8bd4-f18cb04ab218"
            },
            {
                "id": "b45a218b-7f94-495c-937d-88a6ee6bf070"
            },
            {
                "id": "b73b0b24-15ae-4f1f-9489-097dcc1536b9"
            },
            {
                "id": "e0df36d0-8e65-4190-9fdc-321cad54e66d"
            },
            {
                "id": "e1800a73-f3a7-46c8-9049-0e7951128803"
            }
        ],
        "displayValue": "M38: 10: 24,25,26,27,28,29,30,31,32,33",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dc1509bb-7127-4296-8b1d-6f602fce0aa6",
        "sizeRangeCode": "M38: 11: 0-20",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-20",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 11: 0-20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b60f73be-e93a-4ce8-902e-8b21e4027304",
        "sizeRangeCode": "M38: 12: 00-20",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00-20",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 12: 00-20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "816270c5-0481-4cc1-ba36-d61dc4f8f06d",
        "sizeRangeCode": "M38: 23: 00, 0, 2-20 EVEN, 4-12 TALL, 0-10P",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00, 0, 2-20 EVEN, 4-12 TALL, 0-10P",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 23: 00, 0, 2-20 EVEN, 4-12 TALL, 0-10P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "12eb607f-229c-491c-9e86-7f3e9c685081",
        "sizeRangeCode": "M38: 23: 24-35, 4-12 TALL EVEN, 0-10P EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "24-35, 4-12 TALL EVEN, 0-10P EVEN",
        "sizeList": [
            {
                "id": "0a10b7e1-f34a-4b76-9e16-de751b8bd94a"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "49caa766-8a85-4c7e-ac1d-93bfef46dd6f"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "60fbf2e2-0013-4bb5-aab1-2255f104b4cc"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "9475fae2-9d7c-48e7-9370-95c0615ca08c"
            },
            {
                "id": "970766f6-eb6b-4c41-8bd4-f18cb04ab218"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "b45a218b-7f94-495c-937d-88a6ee6bf070"
            },
            {
                "id": "b73b0b24-15ae-4f1f-9489-097dcc1536b9"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "e0df36d0-8e65-4190-9fdc-321cad54e66d"
            },
            {
                "id": "e1800a73-f3a7-46c8-9049-0e7951128803"
            },
            {
                "id": "eb636b29-3917-43c0-b7d2-2ac6ece46f05"
            },
            {
                "id": "f7eb7b05-e668-4651-aafb-fea89554d06c"
            }
        ],
        "displayValue": "M38: 23: 24-35, 4-12 TALL EVEN, 0-10P EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "204ce685-a7f4-4582-8f94-8e5465e0b4d3",
        "sizeRangeCode": "M38: 26: 0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "sizeList": [
            {
                "id": "0c92f6ef-e350-4a85-aab6-6d86c2a1780d"
            },
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1ce2372d-2f91-49e7-bdf3-1c0dfa15a8aa"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "590810dc-3f09-4b2b-8f64-517f5d2d9da9"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a192d813-295b-44da-b634-040b0d8de9e0"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 26: 0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e315f1ca-92df-42c0-a74c-ec2897e1a231",
        "sizeRangeCode": "M38: 27: 0-20, 4-16 Tall, 00-14 Petite",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-20, 4-16 Tall, 00-14 Petite",
        "sizeList": [
            {
                "id": "0c92f6ef-e350-4a85-aab6-6d86c2a1780d"
            },
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1ce2372d-2f91-49e7-bdf3-1c0dfa15a8aa"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "590810dc-3f09-4b2b-8f64-517f5d2d9da9"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "840c9c1b-4dc7-4590-9924-6c785ed10e2f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a192d813-295b-44da-b634-040b0d8de9e0"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 27: 0-20, 4-16 Tall, 00-14 Petite",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d9dd653c-7f9f-4ead-8f83-d439fc1821bc",
        "sizeRangeCode": "M38: 27: 00, 0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00, 0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "sizeList": [
            {
                "id": "0c92f6ef-e350-4a85-aab6-6d86c2a1780d"
            },
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1ce2372d-2f91-49e7-bdf3-1c0dfa15a8aa"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "590810dc-3f09-4b2b-8f64-517f5d2d9da9"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a192d813-295b-44da-b634-040b0d8de9e0"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 27: 00, 0,2,4,6,8,10,12,14,16,18,20,4 TALL,6 TALL,8 TALL,10 TALL,12 TALL,14 TALL,16 TALL,0P,2P,4P,6P,8P,10P,12P,14P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3679c1d5-f854-4dc0-b955-c666b16de790",
        "sizeRangeCode": "M38: 28: 00-20, 4-16T, 0-14P",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00-20, 4-16T, 0-14P",
        "sizeList": [
            {
                "id": "0c92f6ef-e350-4a85-aab6-6d86c2a1780d"
            },
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1ce2372d-2f91-49e7-bdf3-1c0dfa15a8aa"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "590810dc-3f09-4b2b-8f64-517f5d2d9da9"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "840c9c1b-4dc7-4590-9924-6c785ed10e2f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a192d813-295b-44da-b634-040b0d8de9e0"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 28: 00-20, 4-16T, 0-14P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9d5225eb-cdfc-4501-8ea5-f793c1489804",
        "sizeRangeCode": "M38: 33: 0-2-, 0TALL-20TALL, 0P-20P",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-2-, 0TALL-20TALL, 0P-20P",
        "sizeList": [
            {
                "id": "0c92f6ef-e350-4a85-aab6-6d86c2a1780d"
            },
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "0f46c9c1-e9dc-4d6c-b0a8-3f9fc5fc2f66"
            },
            {
                "id": "0fc72f8a-440e-4607-a975-aace2373d83e"
            },
            {
                "id": "10072824-098a-4de2-8057-b2adeaacb5b8"
            },
            {
                "id": "1ce2372d-2f91-49e7-bdf3-1c0dfa15a8aa"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "3dc48d73-de05-430b-9975-9de3cad2e5ca"
            },
            {
                "id": "4dc19bed-1db7-4415-a68a-9d60a163b529"
            },
            {
                "id": "50c32285-4c96-4544-a101-fc8baefcf921"
            },
            {
                "id": "57fff838-c806-411f-9920-dea8a3500b35"
            },
            {
                "id": "590810dc-3f09-4b2b-8f64-517f5d2d9da9"
            },
            {
                "id": "5effa7b9-0c5c-4362-8d8b-23003b961673"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "6ea42ae4-3757-4e46-b118-474ed6068f19"
            },
            {
                "id": "71e54602-51fe-4084-9614-43886aea1ebb"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "8979abb4-cd52-4ec9-99ac-a84d2695b077"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "a192d813-295b-44da-b634-040b0d8de9e0"
            },
            {
                "id": "a20e82c4-4ebc-4767-bccc-8070bb322b64"
            },
            {
                "id": "a21f07a4-ca19-43de-aa4e-e3e5c057cd5d"
            },
            {
                "id": "a46539fd-d5a9-40a4-9511-57ddec44509c"
            },
            {
                "id": "a4f31831-b384-44ee-b39c-7d87885b11e5"
            },
            {
                "id": "af0d2ca1-ecc6-4751-a849-d9401683b394"
            },
            {
                "id": "c515d03b-21be-4b29-a79c-67ff4710052e"
            },
            {
                "id": "ca68e761-e5bc-47a0-9378-9c49d6515b62"
            },
            {
                "id": "cfc9f49b-bf9e-44bf-b4f2-2ee67780a7b0"
            },
            {
                "id": "defad1fb-80be-4f75-baa9-b03267c703bf"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 33: 0-2-, 0TALL-20TALL, 0P-20P",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bad658a9-4bb6-414d-9331-f3386be87c4e",
        "sizeRangeCode": "M38: 3: 3,4,5",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "3,4,5",
        "sizeList": [
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 3: 3,4,5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8560fec4-edd0-46a6-a222-120d5c53e9d5",
        "sizeRangeCode": "M38: 4: 1,2,3,4",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1,2,3,4",
        "sizeList": [
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 4: 1,2,3,4",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2e064eef-8d16-470f-921e-5c88a4be732a",
        "sizeRangeCode": "M38: 4: 2-8 Even",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "2-8 Even",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 4: 2-8 Even",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1c31bda8-742e-4fcd-92b6-06c1c43469e6",
        "sizeRangeCode": "M38: 4: 6,8,10,12",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "6,8,10,12",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 4: 6,8,10,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5a34b7c5-f9ec-4e21-8ab2-de8a5742c2d5",
        "sizeRangeCode": "M38: 5: 0,2,4,6,8",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0,2,4,6,8",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 5: 0,2,4,6,8",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9203ef9f-a28a-426c-8f7f-b4e7a7da0689",
        "sizeRangeCode": "M38: 5: 00,0,2,4,6",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00,0,2,4,6",
        "sizeList": [
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 5: 00,0,2,4,6",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3b765237-994f-4c39-8f4d-4dbeac6cc341",
        "sizeRangeCode": "M38: 5: 6,8,10,12,14",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "6,8,10,12,14",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 5: 6,8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ebcee305-6ad7-4503-98c1-99e7d72f28c5",
        "sizeRangeCode": "M38: 5: SHR 00/0/2/4/6",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "SHR 00/0/2/4/6",
        "sizeList": [
            {
                "id": "2b57fa9c-76f6-47be-9998-c916c9d1d0ed"
            },
            {
                "id": "64d12b0c-f244-4882-bba8-177fd62a43be"
            },
            {
                "id": "9e605a92-264f-4fb1-921a-bb98db95193a"
            },
            {
                "id": "d0489f62-1640-4e5d-b410-aa6bc36ce10c"
            },
            {
                "id": "ead1a8a0-ae2a-4b1e-8844-b11ac8906af8"
            }
        ],
        "displayValue": "M38: 5: SHR 00/0/2/4/6",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1feeaec7-0783-42cf-a954-d27cf2c585ea",
        "sizeRangeCode": "M38: 6: 0, 2, 4, 6, 8, 10",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0, 2, 4, 6, 8, 10",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 6: 0, 2, 4, 6, 8, 10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ac13dde1-08a7-43e4-9094-59b4fd63a4e6",
        "sizeRangeCode": "M38: 6: 00-8 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00-8 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 6: 00-8 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a6676f9f-c884-4ecc-ae50-f1d425fadb82",
        "sizeRangeCode": "M38: 6: 000 - 6",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "000 - 6",
        "sizeList": [
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 6: 000 - 6",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "72e29ec1-d77b-417d-a9c0-9742abe291f2",
        "sizeRangeCode": "M38: 6: 12.5,13.5,14,15,16,16.5",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "12.5,13.5,14,15,16,16.5",
        "sizeList": [
            {
                "id": "0db663ee-166b-4c21-b4b6-b7e83c602a71"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "2f4bc6b6-9d91-42d8-982c-f29dfb65c856"
            },
            {
                "id": "856d9178-1424-4225-906a-4738b4c7bc9a"
            },
            {
                "id": "d424ec00-695e-4ead-97fd-3f322e9c7f71"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 6: 12.5,13.5,14,15,16,16.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d78e792e-bd41-4d47-bc11-509266fb6367",
        "sizeRangeCode": "M38: 6: 14,15,16,12.5,13.5,16.5",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "14,15,16,12.5,13.5,16.5",
        "sizeList": [
            {
                "id": "0db663ee-166b-4c21-b4b6-b7e83c602a71"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "2f4bc6b6-9d91-42d8-982c-f29dfb65c856"
            },
            {
                "id": "856d9178-1424-4225-906a-4738b4c7bc9a"
            },
            {
                "id": "d424ec00-695e-4ead-97fd-3f322e9c7f71"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 6: 14,15,16,12.5,13.5,16.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c869835d-a921-4780-a917-1f6cf62ae648",
        "sizeRangeCode": "M38: 6: 28, 30, 32, 34, 36, 38",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "28, 30, 32, 34, 36, 38",
        "sizeList": [
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "970766f6-eb6b-4c41-8bd4-f18cb04ab218"
            },
            {
                "id": "b66e47b3-3dae-4a9e-bb9f-bc981ac874f1"
            },
            {
                "id": "e1800a73-f3a7-46c8-9049-0e7951128803"
            },
            {
                "id": "f700a2b1-63a0-4dbd-acec-dc8bac524947"
            },
            {
                "id": "f7eb7b05-e668-4651-aafb-fea89554d06c"
            }
        ],
        "displayValue": "M38: 6: 28, 30, 32, 34, 36, 38",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1fa52c78-e926-4849-8e64-09fc12ecdbae",
        "sizeRangeCode": "M38: 6: 4,6,8,10,12,14",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "4,6,8,10,12,14",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 6: 4,6,8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ab197716-3f78-49ad-922c-6314f40ff6bc",
        "sizeRangeCode": "M38: 6: 5,6,7,8,9,10",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "5,6,7,8,9,10",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "58880bb3-0bd0-4417-94db-5b2c3ec4297b"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "91c582a1-daed-4de3-a652-4ff8bb55c730"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 6: 5,6,7,8,9,10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "02426d9a-0eae-431e-9368-855cdabc6adf",
        "sizeRangeCode": "M38: 7: 0, 2, 4, 6, 8, 00, 000",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0, 2, 4, 6, 8, 00, 000",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 0, 2, 4, 6, 8, 00, 000",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e547ae8e-8fac-4a18-b006-f7e156f37cf5",
        "sizeRangeCode": "M38: 7: 0-12",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-12",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 0-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f12a906e-93f3-4ec8-83fb-32c6e3202d41",
        "sizeRangeCode": "M38: 7: 0-12 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-12 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 0-12 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2d26684c-6c36-446c-befc-469ad142d6ab",
        "sizeRangeCode": "M38: 7: 00-10",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00-10",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 00-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "131ab6a9-2d01-402b-b457-ad3d942aa85a",
        "sizeRangeCode": "M38: 7: 000-8 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "000-8 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ddca1daa-38be-4c0f-b9a2-5b18c81ffb50"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 000-8 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6fd3c742-158d-4cc3-a996-01cc43ef9475",
        "sizeRangeCode": "M38: 7: 1,2,3,4,11,12,13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1,2,3,4,11,12,13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 7: 1,2,3,4,11,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "77cdbe8e-4728-439f-95c4-2af724148550",
        "sizeRangeCode": "M38: 7: 1,2,3,4,5,12,13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1,2,3,4,5,12,13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 7: 1,2,3,4,5,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1dbf80d3-1b6d-4069-8dae-4db7311f2170",
        "sizeRangeCode": "M38: 7: 12.5,13.5,14,15,16,16.5,17.5",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "12.5,13.5,14,15,16,16.5,17.5",
        "sizeList": [
            {
                "id": "0db663ee-166b-4c21-b4b6-b7e83c602a71"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "2f4bc6b6-9d91-42d8-982c-f29dfb65c856"
            },
            {
                "id": "6ed2e1b8-e434-440f-be58-63e4ee2e952c"
            },
            {
                "id": "856d9178-1424-4225-906a-4738b4c7bc9a"
            },
            {
                "id": "d424ec00-695e-4ead-97fd-3f322e9c7f71"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 7: 12.5,13.5,14,15,16,16.5,17.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9e6548dc-abe7-4f07-ac38-0617133f24ed",
        "sizeRangeCode": "M38: 7: 14,15,16,12.5,13.5,16.5,17.5",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "14,15,16,12.5,13.5,16.5,17.5",
        "sizeList": [
            {
                "id": "0db663ee-166b-4c21-b4b6-b7e83c602a71"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "2f4bc6b6-9d91-42d8-982c-f29dfb65c856"
            },
            {
                "id": "6ed2e1b8-e434-440f-be58-63e4ee2e952c"
            },
            {
                "id": "856d9178-1424-4225-906a-4738b4c7bc9a"
            },
            {
                "id": "d424ec00-695e-4ead-97fd-3f322e9c7f71"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 7: 14,15,16,12.5,13.5,16.5,17.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c8b2e62c-ed72-4997-910f-812e54f549f4",
        "sizeRangeCode": "M38: 7: 23,24,25,26,27,28,29",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "23,24,25,26,27,28,29",
        "sizeList": [
            {
                "id": "0372463a-9360-4e88-b1d5-17da1a5af6b1"
            },
            {
                "id": "0a10b7e1-f34a-4b76-9e16-de751b8bd94a"
            },
            {
                "id": "49caa766-8a85-4c7e-ac1d-93bfef46dd6f"
            },
            {
                "id": "60fbf2e2-0013-4bb5-aab1-2255f104b4cc"
            },
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "9475fae2-9d7c-48e7-9370-95c0615ca08c"
            },
            {
                "id": "e0df36d0-8e65-4190-9fdc-321cad54e66d"
            }
        ],
        "displayValue": "M38: 7: 23,24,25,26,27,28,29",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ac8969bc-7038-4733-97e8-51f7d40c3619",
        "sizeRangeCode": "M38: 7: 5, 6, 7, 8, 9, 10, 11",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "5, 6, 7, 8, 9, 10, 11",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "58880bb3-0bd0-4417-94db-5b2c3ec4297b"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "91c582a1-daed-4de3-a652-4ff8bb55c730"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 5, 6, 7, 8, 9, 10, 11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e32e2264-bf4a-45e7-8fe9-8c23cd1927cb",
        "sizeRangeCode": "M38: 7: 5,6,7,8,9,10,11",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "5,6,7,8,9,10,11",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "58880bb3-0bd0-4417-94db-5b2c3ec4297b"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "91c582a1-daed-4de3-a652-4ff8bb55c730"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 7: 5,6,7,8,9,10,11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ad1e86f4-d90b-4ed6-895d-6529c6859854",
        "sizeRangeCode": "M38: 8: 0,2,4,6,8,10,12,14",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0,2,4,6,8,10,12,14",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 0,2,4,6,8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1fc96add-2ba5-4997-b9f5-1321e574a7ee",
        "sizeRangeCode": "M38: 8: 0,2-14 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0,2-14 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 0,2-14 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "22fa4925-8937-4095-84f4-4cb600362211",
        "sizeRangeCode": "M38: 8: 00 - 12",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00 - 12",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 00 - 12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7898f9df-6112-4857-9f85-7a830faa0596",
        "sizeRangeCode": "M38: 8: 00,0-12 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "00,0-12 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 00,0-12 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "72a9f7ed-0a18-481a-9bc9-a6282ad9a6b7",
        "sizeRangeCode": "M38: 8: 000 - 10",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "000 - 10",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ddca1daa-38be-4c0f-b9a2-5b18c81ffb50"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 000 - 10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ee5f28a2-8dbf-4b26-a12b-5e4bcc433918",
        "sizeRangeCode": "M38: 8: 000,00,0,2,4,6,8,10",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "000,00,0,2,4,6,8,10",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 8: 000,00,0,2,4,6,8,10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e775755d-c0f3-4242-9062-8b33e4465060",
        "sizeRangeCode": "M38: 8: 1,2,3,4,5,11,12,13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1,2,3,4,5,11,12,13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 8: 1,2,3,4,5,11,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b456900a-f71b-4639-9de0-81c90129f688",
        "sizeRangeCode": "M38: 8: 1-5, 11-13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1-5, 11-13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 8: 1-5, 11-13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7ba4f99f-04cf-454a-80c3-8912b413d6eb",
        "sizeRangeCode": "M38: 8: 1-5; 11-13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1-5; 11-13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            }
        ],
        "displayValue": "M38: 8: 1-5; 11-13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d72f7f25-6513-4e09-a9bb-1bbfdff44521",
        "sizeRangeCode": "M38: 8: 24-38 Even",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "24-38 Even",
        "sizeList": [
            {
                "id": "49caa766-8a85-4c7e-ac1d-93bfef46dd6f"
            },
            {
                "id": "60fbf2e2-0013-4bb5-aab1-2255f104b4cc"
            },
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "970766f6-eb6b-4c41-8bd4-f18cb04ab218"
            },
            {
                "id": "b66e47b3-3dae-4a9e-bb9f-bc981ac874f1"
            },
            {
                "id": "e1800a73-f3a7-46c8-9049-0e7951128803"
            },
            {
                "id": "f700a2b1-63a0-4dbd-acec-dc8bac524947"
            },
            {
                "id": "f7eb7b05-e668-4651-aafb-fea89554d06c"
            }
        ],
        "displayValue": "M38: 8: 24-38 Even",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ce099448-ff5e-436a-8660-b8ec7e35c072",
        "sizeRangeCode": "M38: 9: 0-16 ",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-16 ",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 9: 0-16 ",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8cf6b044-b31b-42f9-9efa-f37c3e408e03",
        "sizeRangeCode": "M38: 9: 0-16 EVEN",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "0-16 EVEN",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "2e24ac45-ce87-487a-b8ae-a02161724ec7"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            },
            {
                "id": "fad25563-2144-40a5-af1d-05668ab55275"
            }
        ],
        "displayValue": "M38: 9: 0-16 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b7551dbe-a98d-4a35-b85d-eb1a620f52cd",
        "sizeRangeCode": "M38: 9: 000-12",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "000-12",
        "sizeList": [
            {
                "id": "0c989963-61f2-4fa7-9683-bd079a856270"
            },
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "62101db0-8a3d-4ec3-845f-da190385454c"
            },
            {
                "id": "74bb2a01-28d0-41dd-852c-d78d405a0d8f"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c4ba8b4b-0166-4b84-ac5a-942d514543a1"
            },
            {
                "id": "e180a0f3-b921-4e66-a6f1-6a152f8af724"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 9: 000-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3559d022-3504-42a2-b2b9-cb5215fdbeeb",
        "sizeRangeCode": "M38: 9: 1, 2, 3, 4, 5, 6, 11, 12, 13",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "1, 2, 3, 4, 5, 6, 11, 12, 13",
        "sizeList": [
            {
                "id": "1e39b01a-fd3a-4cb9-9b20-feeed4d5113d"
            },
            {
                "id": "24d4e042-0123-4019-90ff-ef9dcf985065"
            },
            {
                "id": "31123444-697d-426f-b59d-1ad300e12ab9"
            },
            {
                "id": "34da1bd0-2022-462f-8bb8-3575a7d5d212"
            },
            {
                "id": "96e82de5-c624-4be4-976c-c8fe4cc81141"
            },
            {
                "id": "98f8aa25-80d9-4375-ad1d-5b3d5de67cd9"
            },
            {
                "id": "c23c9fcc-3464-44d4-94ee-45148bc2b258"
            },
            {
                "id": "c8a6da35-8479-4139-8508-88e8b046bae0"
            },
            {
                "id": "ea7165ad-d805-4a7c-9324-c82398131d9e"
            }
        ],
        "displayValue": "M38: 9: 1, 2, 3, 4, 5, 6, 11, 12, 13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bcd969df-5c50-494d-b336-2a288b63f81c",
        "sizeRangeCode": "M38: 9: 24,25,26,27,28,29,30,31,32",
        "sizeModelId": "36806d92-8039-48ac-aad6-7c04ac65ada9",
        "description": "24,25,26,27,28,29,30,31,32",
        "sizeList": [
            {
                "id": "0a10b7e1-f34a-4b76-9e16-de751b8bd94a"
            },
            {
                "id": "49caa766-8a85-4c7e-ac1d-93bfef46dd6f"
            },
            {
                "id": "60fbf2e2-0013-4bb5-aab1-2255f104b4cc"
            },
            {
                "id": "87f5468c-28ed-4a56-bfbb-5e41ce65cf4b"
            },
            {
                "id": "9475fae2-9d7c-48e7-9370-95c0615ca08c"
            },
            {
                "id": "970766f6-eb6b-4c41-8bd4-f18cb04ab218"
            },
            {
                "id": "b73b0b24-15ae-4f1f-9489-097dcc1536b9"
            },
            {
                "id": "e0df36d0-8e65-4190-9fdc-321cad54e66d"
            },
            {
                "id": "e1800a73-f3a7-46c8-9049-0e7951128803"
            }
        ],
        "displayValue": "M38: 9: 24,25,26,27,28,29,30,31,32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c968036f-d80d-4876-874c-0eb2af9af9d5",
        "sizeRangeCode": "M42: 3: 6/7,8/9,10/11",
        "sizeModelId": "da333354-a8ef-4b65-ac7a-e60781867d70",
        "description": "6/7,8/9,10/11",
        "sizeList": [
            {
                "id": "5f2625ac-21e1-4063-a1bd-f7a6f870811d"
            },
            {
                "id": "6c872a3b-ca33-4b17-88ac-414e4b4711a7"
            },
            {
                "id": "c900cb48-c888-478e-926c-a86afa72819c"
            }
        ],
        "displayValue": "M42: 3: 6/7,8/9,10/11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3965a13b-a71e-4a5f-9b6a-0e54da022028",
        "sizeRangeCode": "M42: 3: 8/9,10/11,12/13",
        "sizeModelId": "da333354-a8ef-4b65-ac7a-e60781867d70",
        "description": "8/9,10/11,12/13",
        "sizeList": [
            {
                "id": "076013d4-ff73-44ee-89f2-0881bb24f4b5"
            },
            {
                "id": "5f2625ac-21e1-4063-a1bd-f7a6f870811d"
            },
            {
                "id": "6c872a3b-ca33-4b17-88ac-414e4b4711a7"
            }
        ],
        "displayValue": "M42: 3: 8/9,10/11,12/13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4bc1dc95-10b6-46fd-92d3-b7a684e26e70",
        "sizeRangeCode": "M42: 4: M42:0067-1213",
        "sizeModelId": "da333354-a8ef-4b65-ac7a-e60781867d70",
        "description": "M42:0067-1213",
        "sizeList": [
            {
                "id": "076013d4-ff73-44ee-89f2-0881bb24f4b5"
            },
            {
                "id": "5f2625ac-21e1-4063-a1bd-f7a6f870811d"
            },
            {
                "id": "6c872a3b-ca33-4b17-88ac-414e4b4711a7"
            },
            {
                "id": "c900cb48-c888-478e-926c-a86afa72819c"
            }
        ],
        "displayValue": "M42: 4: M42:0067-1213",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "080ed2ff-1c48-4fe3-9c67-89637cbffdaf",
        "sizeRangeCode": "M42: 5: 1/2, 3/4, 5/6, 10/11, 12/13",
        "sizeModelId": "da333354-a8ef-4b65-ac7a-e60781867d70",
        "description": "1/2, 3/4, 5/6, 10/11, 12/13",
        "sizeList": [
            {
                "id": "076013d4-ff73-44ee-89f2-0881bb24f4b5"
            },
            {
                "id": "47b8286b-b0c3-4e92-bccb-7740c44305fe"
            },
            {
                "id": "599fd5e5-8f2f-42a7-bd18-907e89f30f39"
            },
            {
                "id": "6c872a3b-ca33-4b17-88ac-414e4b4711a7"
            },
            {
                "id": "a9dd3b61-eb7c-4102-bbba-346094620eaa"
            }
        ],
        "displayValue": "M42: 5: 1/2, 3/4, 5/6, 10/11, 12/13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ac725c95-bba1-41a0-b5b8-5b091ba891df",
        "sizeRangeCode": "M42: 5: 1T/2T, 3T/4T, 5T/6T, 10T/11T, 12T/13T",
        "sizeModelId": "da333354-a8ef-4b65-ac7a-e60781867d70",
        "description": "1T/2T, 3T/4T, 5T/6T, 10T/11T, 12T/13T",
        "sizeList": [
            {
                "id": "076013d4-ff73-44ee-89f2-0881bb24f4b5"
            },
            {
                "id": "47b8286b-b0c3-4e92-bccb-7740c44305fe"
            },
            {
                "id": "599fd5e5-8f2f-42a7-bd18-907e89f30f39"
            },
            {
                "id": "6c872a3b-ca33-4b17-88ac-414e4b4711a7"
            },
            {
                "id": "a9dd3b61-eb7c-4102-bbba-346094620eaa"
            }
        ],
        "displayValue": "M42: 5: 1T/2T, 3T/4T, 5T/6T, 10T/11T, 12T/13T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d7eec26e-88c4-4c25-a1fc-1b84b8ea5db8",
        "sizeRangeCode": "M44: 3: 5T/6T, 7T/8T, 9T/10T",
        "sizeModelId": "a6382ea8-0f1b-40b5-9b26-bb5d87799124",
        "description": "5T/6T, 7T/8T, 9T/10T",
        "sizeList": [
            {
                "id": "2b4355b1-ab7e-404f-878d-a2a180e4da38"
            },
            {
                "id": "a36b8d50-19f3-4436-bd04-ff19ba9e3775"
            },
            {
                "id": "bf085d74-e1a9-467d-8939-8ef4d7c04339"
            }
        ],
        "displayValue": "M44: 3: 5T/6T, 7T/8T, 9T/10T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b5a03fec-d770-4c02-b630-00985262f3ce",
        "sizeRangeCode": "M44: 3: 5T/6T,7T/8T,9T/10T",
        "sizeModelId": "a6382ea8-0f1b-40b5-9b26-bb5d87799124",
        "description": "5T/6T,7T/8T,9T/10T",
        "sizeList": [
            {
                "id": "2b4355b1-ab7e-404f-878d-a2a180e4da38"
            },
            {
                "id": "a36b8d50-19f3-4436-bd04-ff19ba9e3775"
            },
            {
                "id": "bf085d74-e1a9-467d-8939-8ef4d7c04339"
            }
        ],
        "displayValue": "M44: 3: 5T/6T,7T/8T,9T/10T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "83e903b2-897b-4ce5-9f8b-ffe185d96b75",
        "sizeRangeCode": "M44: 4: 5/6,7/8,9/10,11/12",
        "sizeModelId": "a6382ea8-0f1b-40b5-9b26-bb5d87799124",
        "description": "5/6,7/8,9/10,11/12",
        "sizeList": [
            {
                "id": "2b4355b1-ab7e-404f-878d-a2a180e4da38"
            },
            {
                "id": "a36b8d50-19f3-4436-bd04-ff19ba9e3775"
            },
            {
                "id": "bf085d74-e1a9-467d-8939-8ef4d7c04339"
            },
            {
                "id": "ef26bbec-eaf7-4121-b0b1-471642f379fb"
            }
        ],
        "displayValue": "M44: 4: 5/6,7/8,9/10,11/12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "631b2699-d8b2-4b23-a06a-eeee89f68d86",
        "sizeRangeCode": "M44: 4: 5/6T, 7/8T, 9/10T, 11T",
        "sizeModelId": "a6382ea8-0f1b-40b5-9b26-bb5d87799124",
        "description": "5/6T, 7/8T, 9/10T, 11T",
        "sizeList": [
            {
                "id": "2b4355b1-ab7e-404f-878d-a2a180e4da38"
            },
            {
                "id": "49ddce35-3dc6-4686-baf2-1611a146adf5"
            },
            {
                "id": "a36b8d50-19f3-4436-bd04-ff19ba9e3775"
            },
            {
                "id": "bf085d74-e1a9-467d-8939-8ef4d7c04339"
            }
        ],
        "displayValue": "M44: 4: 5/6T, 7/8T, 9/10T, 11T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "462813ce-7329-4543-b7f1-dd7c0c81495f",
        "sizeRangeCode": "M45: 4: 8,10,12,14",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "8,10,12,14",
        "sizeList": [
            {
                "id": "b0cfe062-4925-4330-9d34-54b134d4a8f1"
            },
            {
                "id": "d2fba671-e987-4f08-b2b8-bbcfa684d6b4"
            },
            {
                "id": "e43241db-1182-4fa3-8a19-982643039dc1"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 4: 8,10,12,14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d4d393e2-34c5-4c9a-929a-a8d17e10076c",
        "sizeRangeCode": "M45: 4: 8,10,12,14/16",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "8,10,12,14/16",
        "sizeList": [
            {
                "id": "b0cfe062-4925-4330-9d34-54b134d4a8f1"
            },
            {
                "id": "d2fba671-e987-4f08-b2b8-bbcfa684d6b4"
            },
            {
                "id": "dd843913-c6f6-4224-9c08-39ae0dddcd8c"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 4: 8,10,12,14/16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "733f8565-397e-45cf-a7e4-b50974e43ea6",
        "sizeRangeCode": "M45: 5: 8,10,12,14,16",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "8,10,12,14,16",
        "sizeList": [
            {
                "id": "b0cfe062-4925-4330-9d34-54b134d4a8f1"
            },
            {
                "id": "d2fba671-e987-4f08-b2b8-bbcfa684d6b4"
            },
            {
                "id": "d60c444e-ea7a-4694-8e42-a1aa8e255f25"
            },
            {
                "id": "e43241db-1182-4fa3-8a19-982643039dc1"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 5: 8,10,12,14,16",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5af39336-79a6-4660-9012-70488a146712",
        "sizeRangeCode": "M45: 5: 8,10,12,14/16,18/20",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "8,10,12,14/16,18/20",
        "sizeList": [
            {
                "id": "b0cfe062-4925-4330-9d34-54b134d4a8f1"
            },
            {
                "id": "d2fba671-e987-4f08-b2b8-bbcfa684d6b4"
            },
            {
                "id": "dd843913-c6f6-4224-9c08-39ae0dddcd8c"
            },
            {
                "id": "f1519120-0509-4bd7-af3b-b40e1355cefe"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 5: 8,10,12,14/16,18/20",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e90bf702-3cbb-4e84-b239-ae69715c8183",
        "sizeRangeCode": "M45: 6: 8,10,12,14,16,18",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "8,10,12,14,16,18",
        "sizeList": [
            {
                "id": "aba55a26-c457-4265-9955-84a867de8f6a"
            },
            {
                "id": "b0cfe062-4925-4330-9d34-54b134d4a8f1"
            },
            {
                "id": "d2fba671-e987-4f08-b2b8-bbcfa684d6b4"
            },
            {
                "id": "d60c444e-ea7a-4694-8e42-a1aa8e255f25"
            },
            {
                "id": "e43241db-1182-4fa3-8a19-982643039dc1"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 6: 8,10,12,14,16,18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b1b92e4d-f400-47b6-b70f-02b0156a1962",
        "sizeRangeCode": "M45: 7: 1,2,3,4,11,12,13",
        "sizeModelId": "c849959d-2f4b-44ca-a52f-6f7204287873",
        "description": "1,2,3,4,11,12,13",
        "sizeList": [
            {
                "id": "03e23b55-9563-4b9d-b936-40c30f4e2346"
            },
            {
                "id": "0efd34b1-294f-4cbc-adbc-5de309140305"
            },
            {
                "id": "17ab5738-23e2-44c0-a897-2fed5a020620"
            },
            {
                "id": "26673999-be9e-485a-8cf9-58b12aaa4bfc"
            },
            {
                "id": "93c38a70-36ca-4f07-b1f1-bd81331d922e"
            },
            {
                "id": "aacd5e6d-9598-413f-9c56-e7b741ccde3f"
            },
            {
                "id": "fd8d26ae-f239-410c-9ec0-1ab778701bb0"
            }
        ],
        "displayValue": "M45: 7: 1,2,3,4,11,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6ff313e1-6f2c-4919-873e-a1e7aa6bb735",
        "sizeRangeCode": "M52: 10: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 10: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e52ec2f5-0bca-4f80-8fc7-db8581a2a281",
        "sizeRangeCode": "M52: 10: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeList": [
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 10: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1cf02c6d-ec58-4f81-abcd-485b79409568",
        "sizeRangeCode": "M52: 10: MENS 10 SIZES NEW 2931inseam",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "MENS 10 SIZES NEW 2931inseam",
        "sizeList": [
            {
                "id": "10564001-03f4-4a2a-accc-a34593dfe2aa"
            },
            {
                "id": "167a4a6d-143b-4df9-9ac1-5bf9f147362d"
            },
            {
                "id": "704adf40-412b-487e-88a4-64f6c721fa51"
            },
            {
                "id": "9af13d19-cb53-4a84-a898-8d19c6326210"
            },
            {
                "id": "a7089653-5235-4b14-a085-cf451b5a18e6"
            },
            {
                "id": "c37a3b20-7adb-4ba0-8098-0d7bd1d17602"
            },
            {
                "id": "d0f9d791-102f-47bd-82a6-fd2c0b5b122f"
            },
            {
                "id": "f2c7c605-f329-43dd-9bf2-60d293cb74b7"
            },
            {
                "id": "f5836168-73f0-4119-85b7-e5b6c9e4660b"
            },
            {
                "id": "f7230cd5-6745-4126-84c6-68d3d14ad99b"
            }
        ],
        "displayValue": "M52: 10: MENS 10 SIZES NEW 2931inseam",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "17f6aca7-4053-422e-b2c0-d49ef57b4d16",
        "sizeRangeCode": "M52: 11: 28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 11: 28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "569c9e63-ce0e-42d7-b2ba-5d9ded6c5c21",
        "sizeRangeCode": "M52: 11: 28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 11: 28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e1a4a3c6-ca34-4f58-be2e-0c3dd130cd67",
        "sizeRangeCode": "M52: 12: 28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 12: 28/30,30/30,30/32,31/30,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9b38321e-f2b8-4b45-b34b-f62946272a1f",
        "sizeRangeCode": "M52: 12: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,34X30,34X32,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,34X30,34X32,36X30,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 12: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,34X30,34X32,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ba432cc2-ee14-499d-9b1e-ec1fb5ab2105",
        "sizeRangeCode": "M52: 12: 28X32, 30X30, 30X32, 32X30, 32X32, 32X34, 34X30, 34X32, 34X34, 36X30, 36X32, 36X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X32, 30X30, 30X32, 32X30, 32X32, 32X34, 34X30, 34X32, 34X34, 36X30, 36X32, 36X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 12: 28X32, 30X30, 30X32, 32X30, 32X32, 32X34, 34X30, 34X32, 34X34, 36X30, 36X32, 36X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d7f129a6-6b64-4992-9453-91279672e5bc",
        "sizeRangeCode": "M52: 12: 28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 12: 28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7cea27a7-f2aa-4b57-93cd-f93437e5bbcc",
        "sizeRangeCode": "M52: 12: 28x30 30x30 30x32 32x30 32x32 32x34 34x30 34x32 34x34 36x32 36x34 38x32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28x30 30x30 30x32 32x30 32x32 32x34 34x30 34x32 34x34 36x32 36x34 38x32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 12: 28x30 30x30 30x32 32x30 32x32 32x34 34x30 34x32 34x34 36x32 36x34 38x32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "324cef42-adf2-4611-897c-e81ddea05e84",
        "sizeRangeCode": "M52: 12: 30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 12: 30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "47e53231-e5f7-473b-bcbf-e4f2e958765d",
        "sizeRangeCode": "M52: 12: 30x32,32x30,32x32,32x34,34x30,34x32,34x34,36x30x36x32,36x34,38x32,28x32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "30x32,32x30,32x32,32x34,34x30,34x32,34x34,36x30x36x32,36x34,38x32,28x32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 12: 30x32,32x30,32x32,32x34,34x30,34x32,34x34,36x30x36x32,36x34,38x32,28x32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9bb990ba-e7db-48fb-9794-152826600833",
        "sizeRangeCode": "M52: 13: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 13: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b3cf8282-640a-49ac-8fa0-b243991e1355",
        "sizeRangeCode": "M52: 13: 28X30,28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 13: 28X30,28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "eeea40e9-e1e5-42d4-ab1c-9ea46d9b959f",
        "sizeRangeCode": "M52: 13: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 13: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70b1b005-db15-42e8-91a1-811b4f980b26",
        "sizeRangeCode": "M52: 13: 28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 13: 28X32,30X30,30X32,32X30,32X32,32X34,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a8244c5f-4127-47bd-baa3-fc0aa79fd2c1",
        "sizeRangeCode": "M52: 13: 30X30,30X32,31X30,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "30X30,30X32,31X30,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 13: 30X30,30X32,31X30,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dce2b546-3f1e-48e7-8ec1-ef93e920c7ef",
        "sizeRangeCode": "M52: 14: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 14: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,34/30,34/32,36/30,36/32,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4151b96a-d75c-43b4-85b8-c43845bac355",
        "sizeRangeCode": "M52: 14: 28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32, 34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32, 34/30,34/32,36/30,36/32,38/32,40/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 14: 28/30,30/30,30/32,31/30,32/30,32/32,33/30,33/32, 34/30,34/32,36/30,36/32,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "63653171-07e2-4761-90f6-3d84bdd9fb30",
        "sizeRangeCode": "M52: 14: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 14: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4a6f5143-15a7-4cc9-a4b6-4485e8ae0eaf",
        "sizeRangeCode": "M52: 14: M52 14SIZES",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "M52 14SIZES",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 14: M52 14SIZES",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8c66d067-c7ba-4ddb-b502-6b41303da404",
        "sizeRangeCode": "M52: 15: 15 SIZE 2830-3830",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "15 SIZE 2830-3830",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 15: 15 SIZE 2830-3830",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d3970def-9b73-4a6a-9fea-1f8a1965821d",
        "sizeRangeCode": "M52: 15: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32,38/32,40/32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 15: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,36/32,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0606c786-ef2b-41fb-a99f-8e32b4339767",
        "sizeRangeCode": "M52: 15: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 15: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "964279f2-1461-438a-a751-4ab2503c4a68",
        "sizeRangeCode": "M52: 16: 16 SIZE 2830-3832",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "16 SIZE 2830-3832",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 16: 16 SIZE 2830-3832",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0f2a2429-e02a-4b86-a68e-97c3f3559741",
        "sizeRangeCode": "M52: 16: 28-34,36X30,30-34,36,38X32,34X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28-34,36X30,30-34,36,38X32,34X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 16: 28-34,36X30,30-34,36,38X32,34X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c53c4509-164d-4ebf-b971-27ee46e69240",
        "sizeRangeCode": "M52: 16: 28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 16: 28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8efed57f-77f8-422f-b62d-1ad027b5ae5f",
        "sizeRangeCode": "M52: 16: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X32,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X32,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 16: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X32,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6d097dc2-a933-43ff-95ab-fcf6b557bca0",
        "sizeRangeCode": "M52: 17: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 17: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ce597469-d439-47cc-b2df-9424437de85b",
        "sizeRangeCode": "M52: 17: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 17: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5e14d253-e8a6-4ee6-bbf9-0c7b95120927",
        "sizeRangeCode": "M52: 17: 2830,2930,3030,3032,3130,3132,3230,3232,3330,3332,3430,3432,3434,3630,3632,3832,4032",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "2830,2930,3030,3032,3130,3132,3230,3232,3330,3332,3430,3432,3434,3630,3632,3832,4032",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 17: 2830,2930,3030,3032,3130,3132,3230,3232,3330,3332,3430,3432,3434,3630,3632,3832,4032",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "eecbe5be-3492-4596-9a3c-84448a4e312b",
        "sizeRangeCode": "M52: 17: 28X30 - 36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30 - 36X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 17: 28X30 - 36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "de290bfb-0381-4a69-bc57-99c25ad6f1dd",
        "sizeRangeCode": "M52: 17: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 17: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "007c0a8a-6cfa-49ed-8db0-dbb4b81a3739",
        "sizeRangeCode": "M52: 17: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 17: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f898ed91-b956-43f6-8de3-3307961ae732",
        "sizeRangeCode": "M52: 17: 30X30,30X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32,38X34,40X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "30X30,30X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32,38X34,40X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 17: 30X30,30X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32,38X34,40X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "24140601-1dc9-4e4d-9a3b-7e5ba89289be",
        "sizeRangeCode": "M52: 18: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 18: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a4477726-0436-4d59-b3a5-db5d6b31688c",
        "sizeRangeCode": "M52: 18: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 18: 28/30,29/30,30/30,30/32,31/30,31/32,32/30,32/32,33/30,33/32,34/30,34/32,34/34,36/30,36/32,38/30,38/32,40/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d3dc09cb-d1ca-4ad4-bebf-19b0c9fa34a9",
        "sizeRangeCode": "M52: 18: 2830-3832",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "2830-3832",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 18: 2830-3832",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4713d5b3-12b2-405b-ae2e-d3029fa78015",
        "sizeRangeCode": "M52: 18: 28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 18: 28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70c022bc-252a-4e87-ae7f-871c2cd0de13",
        "sizeRangeCode": "M52: 18: 30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32, 36X34, 38X30, 38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32, 36X34, 38X30, 38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 18: 30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32, 36X34, 38X30, 38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5d0cea30-aebc-49d5-a4d5-b7f1d8426fc7",
        "sizeRangeCode": "M52: 19: 28/30,28/32,29/30,30/30,30/32,31/30,31/32,32/30,32/32,32/34,33/30,33/32,34/30,34/32,34/34,36/30,36/32,36/34,38/32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28/30,28/32,29/30,30/30,30/32,31/30,31/32,32/30,32/32,32/34,33/30,33/32,34/30,34/32,34/34,36/30,36/32,36/34,38/32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 19: 28/30,28/32,29/30,30/30,30/32,31/30,31/32,32/30,32/32,32/34,33/30,33/32,34/30,34/32,34/34,36/30,36/32,36/34,38/32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f4c61124-ad76-4629-922a-2d540bd7e952",
        "sizeRangeCode": "M52: 20: 28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 20: 28X30,28X32,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,34X30,34X32,34X34,36X30,36X32,36X34,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6a4e6ab3-5784-466c-b7c6-56c7283235be",
        "sizeRangeCode": "M52: 20: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 20: 28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,33X30,33X32,33X34,34X30,34X32,34X34,36X30,36X32,36X34,38X30,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "451a0b0c-6165-487c-978a-8c73c03bcda5",
        "sizeRangeCode": "M52: 20: 29X30,29X32,30X30,30x32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "29X30,29X32,30X30,30x32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 20: 29X30,29X32,30X30,30x32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d32e7da4-c001-426e-b575-2e1733bf68d2",
        "sizeRangeCode": "M52: 24: 28X28,28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X28,28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 24: 28X28,28X30,29X30,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "448400b5-7f8d-449c-a8ee-1d44b97de84d",
        "sizeRangeCode": "M52: 24: 28x28-42x30",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28x28-42x30",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3cae4a96-0527-41de-a70f-b02e730c0901"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "63ea152a-ace2-4dee-b85f-fa28ac7e0ba0"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f2188249-6e07-4cef-9332-8bdcb661ec6a"
            }
        ],
        "displayValue": "M52: 24: 28x28-42x30",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d6f4daa7-be77-479b-a751-4327e54a0271",
        "sizeRangeCode": "M52: 24: M52: 24: TALL 28x30-38x36",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "M52: 24: TALL 28x30-38x36",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "62c39a82-f7d3-4a86-b890-8261fbfcc2ea"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "edad68cc-aa75-45a5-8e14-51f139be6d7d"
            }
        ],
        "displayValue": "M52: 24: M52: 24: TALL 28x30-38x36",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ad7b0d1b-68f1-4c0a-bb70-189fbae458d7",
        "sizeRangeCode": "M52: 24: M52_NEW",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "M52_NEW",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "1df24371-c3d5-4097-a766-d1fd8f61dc2b"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 24: M52_NEW",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cb1cfe43-ffa5-4645-a37b-a0134e1ddc46",
        "sizeRangeCode": "M52: 25: 28X28,28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X28,28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            }
        ],
        "displayValue": "M52: 25: 28X28,28X30,29X30,29X32,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "11e18896-5b64-4031-8537-9936b17074fc",
        "sizeRangeCode": "M52: 25: EUOL MENS PROFILE REQUEST - 0902",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "EUOL MENS PROFILE REQUEST - 0902",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "1df24371-c3d5-4097-a766-d1fd8f61dc2b"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 25: EUOL MENS PROFILE REQUEST - 0902",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "953cc7f8-ba54-46b5-b1b7-30c6fe627baa",
        "sizeRangeCode": "M52: 34: 28X28,28X30,29X30,29X32,30X28,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X28,28X30,29X30,29X32,30X28,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "1df24371-c3d5-4097-a766-d1fd8f61dc2b"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3cae4a96-0527-41de-a70f-b02e730c0901"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "50c02c34-f57f-4c1b-9414-41739be76a1c"
            },
            {
                "id": "62c39a82-f7d3-4a86-b890-8261fbfcc2ea"
            },
            {
                "id": "63ea152a-ace2-4dee-b85f-fa28ac7e0ba0"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "72c8a172-9a36-4bf1-a80e-58b8d8c19719"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "edad68cc-aa75-45a5-8e14-51f139be6d7d"
            },
            {
                "id": "f2188249-6e07-4cef-9332-8bdcb661ec6a"
            }
        ],
        "displayValue": "M52: 34: 28X28,28X30,29X30,29X32,30X28,30X30,30X32,31X30,31X32,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0800a51c-ed41-4e40-9a9c-b1fc6924afda",
        "sizeRangeCode": "M52: 37: 28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X28,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X28,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X28,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X28,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "1df24371-c3d5-4097-a766-d1fd8f61dc2b"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3cae4a96-0527-41de-a70f-b02e730c0901"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "50c02c34-f57f-4c1b-9414-41739be76a1c"
            },
            {
                "id": "63ea152a-ace2-4dee-b85f-fa28ac7e0ba0"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "72c8a172-9a36-4bf1-a80e-58b8d8c19719"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "743b3520-503c-45e4-9f45-39041a0d6da6"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8c17420e-e345-42be-bb4a-eab87d273578"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "ad2d5bff-baaa-4aa6-b0d9-361fd6cb755f"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d26a76e1-df7b-435a-9913-54e31487d85c"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "f2188249-6e07-4cef-9332-8bdcb661ec6a"
            },
            {
                "id": "f5a1ec0b-642c-4c04-90be-53cc44832775"
            }
        ],
        "displayValue": "M52: 37: 28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X28,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X28,34X30,34X32,34X34,34X36,36X30,36X32,36X34,38X30,38X32,38X34,40X30,40X32,40X34,42X30,42X32,42X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4fbb2680-ab2b-47ae-a49d-d38d271c5620",
        "sizeRangeCode": "M52: 37: 28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "sizeList": [
            {
                "id": "00baf746-eaf5-4a4d-b00a-85130e81987d"
            },
            {
                "id": "0230e754-3abb-42dc-b905-d626d70a88cc"
            },
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "16415b18-5637-4eea-9873-9b8cfbd4b385"
            },
            {
                "id": "1df24371-c3d5-4097-a766-d1fd8f61dc2b"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "3017a6f5-b12d-4bcf-92ff-79caae2ee952"
            },
            {
                "id": "3cae4a96-0527-41de-a70f-b02e730c0901"
            },
            {
                "id": "3f1f3001-d05a-4858-9308-d5205b49e147"
            },
            {
                "id": "44605df1-c083-47ca-a727-542d4b7f3c7c"
            },
            {
                "id": "50c02c34-f57f-4c1b-9414-41739be76a1c"
            },
            {
                "id": "62c39a82-f7d3-4a86-b890-8261fbfcc2ea"
            },
            {
                "id": "63ea152a-ace2-4dee-b85f-fa28ac7e0ba0"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6d151109-bc32-4534-b16c-62c950275c4b"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "70d4c896-330d-43c7-a93c-03f5fe418f71"
            },
            {
                "id": "72c8a172-9a36-4bf1-a80e-58b8d8c19719"
            },
            {
                "id": "731d8d8a-5016-48e4-bc67-5b7586362b19"
            },
            {
                "id": "743b3520-503c-45e4-9f45-39041a0d6da6"
            },
            {
                "id": "76c8181c-67f9-4860-9afd-b9ca5a3d360c"
            },
            {
                "id": "8c17420e-e345-42be-bb4a-eab87d273578"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "ad2d5bff-baaa-4aa6-b0d9-361fd6cb755f"
            },
            {
                "id": "b4dd2251-7de7-4bb9-a56c-55c799723d70"
            },
            {
                "id": "c49541ec-2f91-41ae-bbe0-bc7cf30d8c59"
            },
            {
                "id": "d6b9b56d-8a77-4685-9d6b-8a1bc9f4759a"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "e8c7aafd-b324-4505-b62c-090623387e56"
            },
            {
                "id": "edad68cc-aa75-45a5-8e14-51f139be6d7d"
            },
            {
                "id": "f2188249-6e07-4cef-9332-8bdcb661ec6a"
            }
        ],
        "displayValue": "M52: 37: 28X28,28X30,29X30,29X32,29X34,30X28,30X30,30X32,30X34,31X30,31X32,31X34,32X30,32X32,32X34,32X36,33X30,33X32,33X34,34X30,34X32,34X34,34X36,36X30,36X32,36X34,36X36,38X30,38X32,38X34,38X36,40X30,40X32,40X34,42X30,42X32,42X34",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3b4575cb-8a03-44d6-8a4e-301b34202af4",
        "sizeRangeCode": "M52: 5: 28x30,30x32,32x32,34x32,36x32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28x30,30x32,32x32,34x32,36x32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            }
        ],
        "displayValue": "M52: 5: 28x30,30x32,32x32,34x32,36x32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "61013058-c576-41f5-8212-f8103b62ee3f",
        "sizeRangeCode": "M52: 5: 28x32,30x32,32x32,34x32,36x32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28x32,30x32,32x32,34x32,36x32",
        "sizeList": [
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 5: 28x32,30x32,32x32,34x32,36x32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "817005c7-1b28-4103-8434-a1589f89711e",
        "sizeRangeCode": "M52: 5: 29X30,31X30,32X30,33X32,34X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "29X30,31X30,32X30,33X32,34X32",
        "sizeList": [
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "91642ecb-4c9a-4b6c-a943-e7651c8ca672"
            },
            {
                "id": "9f25313d-000c-44b5-bf03-1a40e3affa79"
            },
            {
                "id": "decee389-bb4a-4783-8386-9c547621b0c1"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 5: 29X30,31X30,32X30,33X32,34X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8883bc99-0373-4234-b7f4-3fb5c0ff4f23",
        "sizeRangeCode": "M52: 8: 28X30,30X30,30X32,32X30,32X32,34X30,34X32,36X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X30,30X30,30X32,32X30,32X32,34X30,34X32,36X32",
        "sizeList": [
            {
                "id": "14485dd6-4a34-47e0-ac8d-ac5c39a52d39"
            },
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "a02f409c-4480-4c26-a053-611c7756a349"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            }
        ],
        "displayValue": "M52: 8: 28X30,30X30,30X32,32X30,32X32,34X30,34X32,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e04b8576-5bbb-4a01-8457-4c44928f77bd",
        "sizeRangeCode": "M52: 8: 28X32,30X30,30X32,32X30,32X32,34X32,36X32,38X32",
        "sizeModelId": "544953c4-eaee-4af0-add1-8538f16d9635",
        "description": "28X32,30X30,30X32,32X30,32X32,34X32,36X32,38X32",
        "sizeList": [
            {
                "id": "2100e5c1-abb2-4ec6-a978-38ade63e56c2"
            },
            {
                "id": "27926880-7f4d-490f-9cd2-24ac3b76d2ed"
            },
            {
                "id": "64d50c60-f48f-4cc0-9623-9c424f9b08a4"
            },
            {
                "id": "6ec0348d-c9c9-48f3-a4c2-82f5ed40fcd7"
            },
            {
                "id": "8d5fd6ce-6a5d-44fe-8fd0-afe87eb1d04d"
            },
            {
                "id": "d6f5e4e7-f8fa-4d17-a697-51fcb45ef6eb"
            },
            {
                "id": "e48117c4-a342-49e7-98ff-df4e2f54c274"
            },
            {
                "id": "f918df12-7bd8-4255-a4f6-98e93abb0fb5"
            }
        ],
        "displayValue": "M52: 8: 28X32,30X30,30X32,32X30,32X32,34X32,36X32,38X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6efc3828-7911-406a-b84d-d57bedc303c4",
        "sizeRangeCode": "M53: 10: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeModelId": "641d2cb5-c4e5-41fb-ace9-ee660db02c98",
        "description": "28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeList": [
            {
                "id": "1db78b78-90b0-4016-999f-3fde44d71d8b"
            },
            {
                "id": "241fb758-3fc6-4e5c-abf9-38427c2cb983"
            },
            {
                "id": "4eee500c-85a9-4baa-a497-b713355c8ea2"
            },
            {
                "id": "57dd5f57-de68-47b1-8ebf-aaf52e10764e"
            },
            {
                "id": "8604b0c3-25f6-41c6-9e9a-02f21ac5bc0a"
            },
            {
                "id": "9133707d-0bd8-4dc7-bf55-9927e757de7e"
            },
            {
                "id": "9a7eb1ce-cfe8-4739-8ee6-6045b914966c"
            },
            {
                "id": "a6d0808f-fb29-4a6d-a54b-821619dede88"
            },
            {
                "id": "d4143c3f-a2b0-4fc3-8ad7-0bdbab29dfe5"
            },
            {
                "id": "e7b31697-5479-491a-b323-8ca2310a214b"
            }
        ],
        "displayValue": "M53: 10: 28X30,29X30,30X30,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d20a5002-f03e-427d-8d05-2c5363a8f57f",
        "sizeRangeCode": "M53: 10: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeModelId": "641d2cb5-c4e5-41fb-ace9-ee660db02c98",
        "description": "29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "sizeList": [
            {
                "id": "1db78b78-90b0-4016-999f-3fde44d71d8b"
            },
            {
                "id": "241fb758-3fc6-4e5c-abf9-38427c2cb983"
            },
            {
                "id": "57dd5f57-de68-47b1-8ebf-aaf52e10764e"
            },
            {
                "id": "8604b0c3-25f6-41c6-9e9a-02f21ac5bc0a"
            },
            {
                "id": "9133707d-0bd8-4dc7-bf55-9927e757de7e"
            },
            {
                "id": "926d36a1-0525-4c9b-8448-9a971cb8c4be"
            },
            {
                "id": "9a7eb1ce-cfe8-4739-8ee6-6045b914966c"
            },
            {
                "id": "a6d0808f-fb29-4a6d-a54b-821619dede88"
            },
            {
                "id": "d4143c3f-a2b0-4fc3-8ad7-0bdbab29dfe5"
            },
            {
                "id": "e7b31697-5479-491a-b323-8ca2310a214b"
            }
        ],
        "displayValue": "M53: 10: 29X30,30X30,30X32,31X30,31X32,32X30,32X32,33X32,34X32,36X32",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b5ebc0c9-f796-40f9-b19e-c9404e19c26d",
        "sizeRangeCode": "M56: 10: 30 B, 32 A-C, 34 A-C, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30 B, 32 A-C, 34 A-C, 36 B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            }
        ],
        "displayValue": "M56: 10: 30 B, 32 A-C, 34 A-C, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dee9f4c5-f5b4-4a85-8fd4-1e9664aca0b7",
        "sizeRangeCode": "M56: 10: 32 A-B, 34 A-D, 36 A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-B, 34 A-D, 36 A-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 10: 32 A-B, 34 A-D, 36 A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ea2da6a6-4318-4d2d-9ce5-055cd42eb16f",
        "sizeRangeCode": "M56: 11: 30 B, 32 A-C, 34 A-D, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30 B, 32 A-C, 34 A-D, 36 B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            }
        ],
        "displayValue": "M56: 11: 30 B, 32 A-C, 34 A-D, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e89731db-bbbb-4bbf-90e3-8af53694ca3c",
        "sizeRangeCode": "M56: 11: 32A-32D, 34A-34D, 36A-36C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-32D, 34A-34D, 36A-36C",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 11: 32A-32D, 34A-34D, 36A-36C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c8884f5b-e8c5-4568-b7fd-34484b31944c",
        "sizeRangeCode": "M56: 11: 32A-C, 34A-D, 36A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-C, 34A-D, 36A-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 11: 32A-C, 34A-D, 36A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "696ebab7-7575-4133-80d4-0756842bd72e",
        "sizeRangeCode": "M56: 11: 32B-32D,34B-34D,36B-36D,38B,38C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-32D,34B-34D,36B-36D,38B,38C",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 11: 32B-32D,34B-34D,36B-36D,38B,38C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6fb10e28-49ca-4215-850a-255a7bc8ef6b",
        "sizeRangeCode": "M56: 12: 32 A-D, 34 A-D, 36 A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-D, 34 A-D, 36 A-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 12: 32 A-D, 34 A-D, 36 A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bd95f9d9-59d8-44fe-9693-2647f33ea654",
        "sizeRangeCode": "M56: 12: 32 A-D, 34 A-D, 36 A-D, 38 B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-D, 34 A-D, 36 A-D, 38 B-C",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 12: 32 A-D, 34 A-D, 36 A-D, 38 B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "91f79551-438e-4244-ae3b-242ec9ef579f",
        "sizeRangeCode": "M56: 12: 32B-32DD, 34B-34DD, 36B-36DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-32DD, 34B-34DD, 36B-36DD",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 12: 32B-32DD, 34B-34DD, 36B-36DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c91e3236-c097-4a26-bb8f-ac3dcf8d9be6",
        "sizeRangeCode": "M56: 13: 30 B, 32 A-D, 34 A-D, 36 A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30 B, 32 A-D, 34 A-D, 36 A-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 13: 30 B, 32 A-D, 34 A-D, 36 A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "81adf859-77a7-4d5b-b6ef-de321a1c9788",
        "sizeRangeCode": "M56: 13: 32C-32DD,34B-34DD,36B-36DD,38C-38D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32C-32DD,34B-34DD,36B-36DD,38C-38D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 13: 32C-32DD,34B-34DD,36B-36DD,38C-38D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4c69b6b7-d9ee-4c80-97c6-ab8f77a58925",
        "sizeRangeCode": "M56: 14: 32 A-C, 34 A-D, 36 A-D, 38 B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-C, 34 A-D, 36 A-D, 38 B-C",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            }
        ],
        "displayValue": "M56: 14: 32 A-C, 34 A-D, 36 A-D, 38 B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8c27f3e0-9cf5-476c-9497-aa862d9026dd",
        "sizeRangeCode": "M56: 14: 32 A-D, 34 A-DD, 36 A-DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-D, 34 A-DD, 36 A-DD",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 14: 32 A-D, 34 A-DD, 36 A-DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dc23af51-ad0e-40e4-a55b-8dfbc773003b",
        "sizeRangeCode": "M56: 14: 32A-DD, 34A-DD, 36A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-DD, 34A-DD, 36A-D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 14: 32A-DD, 34A-DD, 36A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "60fa8991-304f-4cf4-b3fa-4372626fdebc",
        "sizeRangeCode": "M56: 14: 32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 14: 32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2f0967df-7920-4669-a6bb-c54c0d6d72f1",
        "sizeRangeCode": "M56: 14: US CSP BREATHE WIRELESS BRA ONLINE HOL 21 19 SIZES",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "US CSP BREATHE WIRELESS BRA ONLINE HOL 21 19 SIZES",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            }
        ],
        "displayValue": "M56: 14: US CSP BREATHE WIRELESS BRA ONLINE HOL 21 19 SIZES",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "72cfb9bf-5871-4e2c-a656-db36613d0923",
        "sizeRangeCode": "M56: 15: 30 A-C; 32 A-D; 34 A-D; 36 A-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30 A-C; 32 A-D; 34 A-D; 36 A-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "509bc734-0890-4b18-bebe-96df7fd54b8c"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "96167664-f04d-4e8f-99ec-4b71cab008ab"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 15: 30 A-C; 32 A-D; 34 A-D; 36 A-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "09b98325-22de-4959-bead-e7e8bd1c4a34",
        "sizeRangeCode": "M56: 15: 30B, 32A-D, 34A-D, 36A-D, 38B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30B, 32A-D, 34A-D, 36A-D, 38B-C",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 15: 30B, 32A-D, 34A-D, 36A-D, 38B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bad1b232-c314-4df1-aa54-de3db2684deb",
        "sizeRangeCode": "M56: 15: 32 A-D, 34 A-D, 36 A-D, 38 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-D, 34 A-D, 36 A-D, 38 B-D",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 15: 32 A-D, 34 A-D, 36 A-D, 38 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f73abc46-af49-4168-8842-aad12a599488",
        "sizeRangeCode": "M56: 15: 32 A-DD, 34 A-DD, 36 A-DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-DD, 34 A-DD, 36 A-DD",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 15: 32 A-DD, 34 A-DD, 36 A-DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "64b68e0a-4bf7-4d9d-b10b-d8ae05e3dab7",
        "sizeRangeCode": "M56: 15: 32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 15: 32B-32DD, 34B-34DD, 36B-36DD, 38B-38D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b71189cb-4576-4a51-b08a-759dbddd2f40",
        "sizeRangeCode": "M56: 16: 32-34A-D, 36A-DD, 38B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32-34A-D, 36A-DD, 38B-D",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 16: 32-34A-D, 36A-DD, 38B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5c58e48f-7ced-4722-bf53-d2f36b7d6d90",
        "sizeRangeCode": "M56: 16: 32A-D,34A-D,36A-DD,38B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-D,34A-D,36A-DD,38B-D",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 16: 32A-D,34A-D,36A-DD,38B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2708917f-e665-409b-82ab-f6521d7e4d9c",
        "sizeRangeCode": "M56: 17: 32 A-DD, 34 A-DD, 36 A-DD, 38 B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-DD, 34 A-DD, 36 A-DD, 38 B-C",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 17: 32 A-DD, 34 A-DD, 36 A-DD, 38 B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "61408470-f560-4872-b774-0ca2d06a76bb",
        "sizeRangeCode": "M56: 17: 32A-D, 34A-DD, 36A-DD, 38B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-D, 34A-DD, 36A-DD, 38B-D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 17: 32A-D, 34A-DD, 36A-DD, 38B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d6cd3f45-911c-4802-a645-0f3270994c87",
        "sizeRangeCode": "M56: 18: 30B,32A-32DD,34A-34DD,36A-36DD,38B-38C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30B,32A-32DD,34A-34DD,36A-36DD,38B-38C",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 18: 30B,32A-32DD,34A-34DD,36A-36DD,38B-38C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "19d4eca5-838a-4c6d-bf8d-946b124de040",
        "sizeRangeCode": "M56: 18: 32 A-DD, 34 A-DD, 36 A-DD, 38 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-DD, 34 A-DD, 36 A-DD, 38 B-D",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 18: 32 A-DD, 34 A-DD, 36 A-DD, 38 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8765a7ee-345d-48db-9d9b-8ae789e695a5",
        "sizeRangeCode": "M56: 19: 32A-38DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-38DD",
        "sizeList": [
            {
                "id": "0832954e-e9e5-4385-9c80-bd4ca38a07ca"
            },
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 19: 32A-38DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a0cbcb1c-e6e8-45d0-b413-cfdbc357a766",
        "sizeRangeCode": "M56: 20: 30A-30C, 32AA-32D, 34AA-34D, 36AA-36D, 38B-38C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30A-30C, 32AA-32D, 34AA-34D, 36AA-36D, 38B-38C",
        "sizeList": [
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "509bc734-0890-4b18-bebe-96df7fd54b8c"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "644cdb92-b007-4ebe-bfb6-90f14b46724c"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "96167664-f04d-4e8f-99ec-4b71cab008ab"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "a0c0a8df-830c-482d-92e6-efa779cafc1e"
            },
            {
                "id": "aa7ce108-356c-4869-b9d6-77432b428343"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 20: 30A-30C, 32AA-32D, 34AA-34D, 36AA-36D, 38B-38C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fdd496ed-0f54-4d9c-be7a-4f1f3d2dfcd7",
        "sizeRangeCode": "M56: 20: 30B, 32A-DD, 34A-DD, 36A-DD, 38B-DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30B, 32A-DD, 34A-DD, 36A-DD, 38B-DD",
        "sizeList": [
            {
                "id": "0832954e-e9e5-4385-9c80-bd4ca38a07ca"
            },
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 20: 30B, 32A-DD, 34A-DD, 36A-DD, 38B-DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "04e6dffd-ce1f-4d1a-ae93-9cdeab1b4af7",
        "sizeRangeCode": "M56: 22: 32A-32DDD, 34A-34DDD, 36A-36DDD, 38B-38DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-32DDD, 34A-34DDD, 36A-36DDD, 38B-38DD",
        "sizeList": [
            {
                "id": "0832954e-e9e5-4385-9c80-bd4ca38a07ca"
            },
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "0f41f08c-a883-4c13-b3e3-bd810ba03363"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "2c66036e-a727-41d2-a22e-80afbf6d3b52"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "9bc477b2-a6ba-4758-943e-5dc90d91e800"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 22: 32A-32DDD, 34A-34DDD, 36A-36DDD, 38B-38DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f430ee0e-62cf-48c6-a567-5d258e60740d",
        "sizeRangeCode": "M56: 25: 30A-30C, 32AA-32DD, 34AA-34DD, 36AA-36DD, 38B-38DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "30A-30C, 32AA-32DD, 34AA-34DD, 36AA-36DD, 38B-38DD",
        "sizeList": [
            {
                "id": "0832954e-e9e5-4385-9c80-bd4ca38a07ca"
            },
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "11962b71-b042-4d70-a071-11f656ecb455"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "509bc734-0890-4b18-bebe-96df7fd54b8c"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "644cdb92-b007-4ebe-bfb6-90f14b46724c"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "96167664-f04d-4e8f-99ec-4b71cab008ab"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "982e945d-64dd-43fa-9153-057110ac461d"
            },
            {
                "id": "a0c0a8df-830c-482d-92e6-efa779cafc1e"
            },
            {
                "id": "aa7ce108-356c-4869-b9d6-77432b428343"
            },
            {
                "id": "ba01c7d2-88a4-4bad-8682-02aeebacb998"
            },
            {
                "id": "d62dde3d-72e9-4b79-8141-67d8d0b33c35"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 25: 30A-30C, 32AA-32DD, 34AA-34DD, 36AA-36DD, 38B-38DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c2229c38-98a2-4d57-a93f-2202d84c4edc",
        "sizeRangeCode": "M56: 5: 32B, 34B-C, 36B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B, 34B-C, 36B-C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            }
        ],
        "displayValue": "M56: 5: 32B, 34B-C, 36B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "767682af-e9eb-4f9d-ac73-80eba201a00e",
        "sizeRangeCode": "M56: 5: 32B,34B,34C,36B,36C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B,34B,34C,36B,36C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            }
        ],
        "displayValue": "M56: 5: 32B,34B,34C,36B,36C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d71eb72a-1f4b-4857-9456-621d7987ed87",
        "sizeRangeCode": "M56: 6: 32 B-D,34 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 B-D,34 B-D",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 6: 32 B-D,34 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d2626da2-64cc-4d1d-b00a-754d1ead1d9e",
        "sizeRangeCode": "M56: 6: 32A-B,34B-C,36B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-B,34B-C,36B-C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 6: 32A-B,34B-C,36B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bfb85d4c-1678-42fc-8297-ec1ab926faa0",
        "sizeRangeCode": "M56: 6: 34A,34B,34C,36A,36B,36C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "34A,34B,34C,36A,36B,36C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 6: 34A,34B,34C,36A,36B,36C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4356d440-f605-4b14-b74d-29708ea4ca28",
        "sizeRangeCode": "M56: 6: 34B,34C,34D,36B,36C,36D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "34B,34C,34D,36B,36C,36D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            }
        ],
        "displayValue": "M56: 6: 34B,34C,34D,36B,36C,36D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b1513001-94cc-4c6f-9cf6-faba9228b4c2",
        "sizeRangeCode": "M56: 7: 32 D, 34 B-D, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 D, 34 B-D, 36 B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 7: 32 D, 34 B-D, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f05085c9-f974-43c9-8071-7fbb37023da7",
        "sizeRangeCode": "M56: 7: 34-36B-D, 38C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "34-36B-D, 38C",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "fbe95d7a-ddee-412a-b7b5-e82f10ce5bb6"
            }
        ],
        "displayValue": "M56: 7: 34-36B-D, 38C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f256d2a3-460d-4a42-a95c-2c3ced9c7440",
        "sizeRangeCode": "M56: 8: 32 A-B, 34 A-C, 36 A-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-B, 34 A-C, 36 A-C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 8: 32 A-B, 34 A-C, 36 A-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f87d8122-afe7-4fe6-a43f-05f483e49be9",
        "sizeRangeCode": "M56: 8: 32 A-B, 34 A-D, 36 B-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-B, 34 A-D, 36 B-C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 8: 32 A-B, 34 A-D, 36 B-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2066d933-e527-4d3c-8024-1816957f5f1b",
        "sizeRangeCode": "M56: 8: 32A-32B,34B-34D,36B-36D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-32B,34B-34D,36B-36D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 8: 32A-32B,34B-34D,36B-36D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "37b4fc21-41d3-4259-be20-808250f4d4b4",
        "sizeRangeCode": "M56: 8: 32C-32D,34B-34D,36B-36D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32C-32D,34B-34D,36B-36D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 8: 32C-32D,34B-34D,36B-36D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "26b5b242-cffb-4ceb-9541-eccedf947c78",
        "sizeRangeCode": "M56: 8: 34B-34DD,36B-36DD",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "34B-34DD,36B-36DD",
        "sizeList": [
            {
                "id": "091de344-42fb-454c-a150-d19c101c135f"
            },
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "545f0cb8-923b-44c1-b1ff-587e38168e7d"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            }
        ],
        "displayValue": "M56: 8: 34B-34DD,36B-36DD",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "44954a88-0081-4f9e-bf98-9a459de960f1",
        "sizeRangeCode": "M56: 9: 32 A-C, 34 A-C, 36 A-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-C, 34 A-C, 36 A-C",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 9: 32 A-C, 34 A-C, 36 A-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4a0f5028-29c3-4071-a7fe-1f1f25c7460d",
        "sizeRangeCode": "M56: 9: 32 A-C, 34 A-C, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-C, 34 A-C, 36 B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 9: 32 A-C, 34 A-C, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "faee2481-987d-4d06-a8bc-365d6fdbe12f",
        "sizeRangeCode": "M56: 9: 32 A-C, 34 A-D, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 A-C, 34 A-D, 36 B-D",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 9: 32 A-C, 34 A-D, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "34af7bba-4ea5-44f4-8893-827e1e0b77bc",
        "sizeRangeCode": "M56: 9: 32 B-D, 34 B-D, 36 B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 B-D, 34 B-D, 36 B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 9: 32 B-D, 34 B-D, 36 B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0c3d870f-4b55-47b7-b5ea-ee09d286e695",
        "sizeRangeCode": "M56: 9: 32 B-D,34 B-D, 36B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32 B-D,34 B-D, 36B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 9: 32 B-D,34 B-D, 36B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9401c427-24bb-44c8-9ae8-f2123070dafc",
        "sizeRangeCode": "M56: 9: 32A-B,34A-D,36A-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-B,34A-D,36A-C",
        "sizeList": [
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 9: 32A-B,34A-D,36A-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "21af4a22-b73f-4c17-980a-99eecdd21a1e",
        "sizeRangeCode": "M56: 9: 32A-C, 34A-C, 36A-C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-C, 34A-C, 36A-C",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            }
        ],
        "displayValue": "M56: 9: 32A-C, 34A-C, 36A-C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6872df5a-3cfc-4098-883f-3633c3d873f9",
        "sizeRangeCode": "M56: 9: 32A-C, 34A-C, 36B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32A-C, 34A-C, 36B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "972da8c1-38e6-42e7-a6b0-87f425fdc0e2"
            }
        ],
        "displayValue": "M56: 9: 32A-C, 34A-C, 36B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e405c8de-985d-4746-8f82-eae344574922",
        "sizeRangeCode": "M56: 9: 32B-C, 34A-D, 36B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-C, 34A-D, 36B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            }
        ],
        "displayValue": "M56: 9: 32B-C, 34A-D, 36B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "57de2e4c-2f10-4a47-a877-f8c3e3ae50b9",
        "sizeRangeCode": "M56: 9: 32B-D, 34B-D, 36B-D",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32B-D, 34B-D, 36B-D",
        "sizeList": [
            {
                "id": "2a50ef1e-2c46-4b17-a176-1c535dacb5d4"
            },
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "5d52efc4-0401-4db0-9350-445123724ef9"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 9: 32B-D, 34B-D, 36B-D",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2edc7e3f-4f18-4fda-984e-e1c23e805151",
        "sizeRangeCode": "M56: 9: 32C,32D,34A,34B,34C,34D,36A,36B,36C",
        "sizeModelId": "60a32f66-f5e0-4461-b510-61b089108209",
        "description": "32C,32D,34A,34B,34C,34D,36A,36B,36C",
        "sizeList": [
            {
                "id": "3d157669-5b78-4f2b-9d83-da863956ea85"
            },
            {
                "id": "461a1824-d47b-4d69-a98e-a2fb95d4ce2d"
            },
            {
                "id": "539caded-a344-498f-845e-302bbce27a14"
            },
            {
                "id": "6da341c4-fd73-4215-87a5-817008e8b3a0"
            },
            {
                "id": "74d48615-eed3-4d3c-a338-1615ce128701"
            },
            {
                "id": "7580021c-0388-4046-9471-152c4d6ae06e"
            },
            {
                "id": "9159dc63-e66a-4c02-9b84-b13830d4a42c"
            },
            {
                "id": "97665ca0-0bee-423a-9e08-978909b70e1e"
            },
            {
                "id": "ffd84e34-8323-4616-bebb-f183f9082ed1"
            }
        ],
        "displayValue": "M56: 9: 32C,32D,34A,34B,34C,34D,36A,36B,36C",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e64a7bda-6b15-4bec-ab35-866410a52de4",
        "sizeRangeCode": "M57: 1: 10/13",
        "sizeModelId": "ba5b2dc0-3356-4963-9dec-b154e7ecaa59",
        "description": "10/13",
        "sizeList": [
            {
                "id": "21b04a25-914f-43b6-ab55-c382ddc2cce4"
            }
        ],
        "displayValue": "M57: 1: 10/13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "21983c14-b3db-4289-9fae-021ffd72ed1a",
        "sizeRangeCode": "M58: 10: 5-11, 6.5-8.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5-11, 6.5-8.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 10: 5-11, 6.5-8.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "55ea4e60-0cdf-49d2-8c7b-a37b1c3aec16",
        "sizeRangeCode": "M58: 10: 6,7,8,9,10,11,6.5,7.5,8.5,9.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6,7,8,9,10,11,6.5,7.5,8.5,9.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "de819753-4719-4498-a7e4-3e4dcccfcb39"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 10: 6,7,8,9,10,11,6.5,7.5,8.5,9.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0234ba9b-7241-4014-a6af-63b2e9c09a11",
        "sizeRangeCode": "M58: 10: 6-11",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-11",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "de819753-4719-4498-a7e4-3e4dcccfcb39"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 10: 6-11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f69e3eb8-f53c-446f-8060-b1a9520c368a",
        "sizeRangeCode": "M58: 10: 6-11, 6.5-9.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-11, 6.5-9.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "de819753-4719-4498-a7e4-3e4dcccfcb39"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 10: 6-11, 6.5-9.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "de932a01-73e0-4740-8eb6-d8d8a5134c26",
        "sizeRangeCode": "M58: 11: 5,6,7,8,9,10,11,12,13,14,15",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5,6,7,8,9,10,11,12,13,14,15",
        "sizeList": [
            {
                "id": "2aaaf83d-5955-4408-b264-b6eba393b710"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "6f19e854-5916-4d00-b8e8-d171990e1e0c"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "847e1062-a04d-4276-8e90-e94c707bf6ab"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 11: 5,6,7,8,9,10,11,12,13,14,15",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0fec72a1-f861-40a8-a734-637bfce06b99",
        "sizeRangeCode": "M58: 11: 5-11, 6.5-9.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5-11, 6.5-9.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "de819753-4719-4498-a7e4-3e4dcccfcb39"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 11: 5-11, 6.5-9.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "06dd303e-8b31-4115-8ebc-12c659b08284",
        "sizeRangeCode": "M58: 3: 6,7,8",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6,7,8",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 3: 6,7,8",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "48d59653-0cb2-4bff-842f-bfe68ddd848f",
        "sizeRangeCode": "M58: 3: 8, 9, 10",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "8, 9, 10",
        "sizeList": [
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 3: 8, 9, 10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "80ca80a1-1ddd-401e-bb5e-0be28793cb99",
        "sizeRangeCode": "M58: 3: 8-10",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "8-10",
        "sizeList": [
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 3: 8-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5f4fa266-9a0b-4be4-8620-b8fa1a1ed5ff",
        "sizeRangeCode": "M58: 4: 5,6,7,8",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5,6,7,8",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 4: 5,6,7,8",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d88bc2b1-cad8-4779-b7a5-8a276f453021",
        "sizeRangeCode": "M58: 4: 6,7,8,9",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6,7,8,9",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 4: 6,7,8,9",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7bfc2b86-4fb9-4482-9872-add16f5cb009",
        "sizeRangeCode": "M58: 4: 7,8,9,10",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "7,8,9,10",
        "sizeList": [
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 4: 7,8,9,10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "564a7d3f-6965-4577-ad0a-542484cf1960",
        "sizeRangeCode": "M58: 4: 8, 9, 10, 11",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "8, 9, 10, 11",
        "sizeList": [
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 4: 8, 9, 10, 11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "07260ebf-38ee-4097-ae26-c0b5bf1c6163",
        "sizeRangeCode": "M58: 5: 5,6,7,8,9",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5,6,7,8,9",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 5: 5,6,7,8,9",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b9e1d806-84dd-4c53-af20-28406bfb96e7",
        "sizeRangeCode": "M58: 5: 6-10",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-10",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 5: 6-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fb0e311e-c204-44da-b815-e480f4576048",
        "sizeRangeCode": "M58: 5: 7,8,9,10,11",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "7,8,9,10,11",
        "sizeList": [
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 5: 7,8,9,10,11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fdfd7730-79b7-455d-a6c5-1e004b1373db",
        "sizeRangeCode": "M58: 5: 8-12",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "8-12",
        "sizeList": [
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 5: 8-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "15de947f-c5e8-4ae7-a6ee-31c1b2fd1397",
        "sizeRangeCode": "M58: 6: 6,7,8,9,10,11",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6,7,8,9,10,11",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 6: 6,7,8,9,10,11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b91d03d8-8c84-4330-97e9-93e8ddc9039e",
        "sizeRangeCode": "M58: 6: 7,8,9,10,11,12",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "7,8,9,10,11,12",
        "sizeList": [
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 6: 7,8,9,10,11,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "585af2b0-d762-4206-af76-cb3078407f41",
        "sizeRangeCode": "M58: 7: 13-Jul",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "13-Jul",
        "sizeList": [
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "847e1062-a04d-4276-8e90-e94c707bf6ab"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 7: 13-Jul",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0a83af8c-1aeb-4f7a-9ba1-caef13e01e33",
        "sizeRangeCode": "M58: 7: 5,6,7,8,9,10,11",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5,6,7,8,9,10,11",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 7: 5,6,7,8,9,10,11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "90d82e7e-5663-45ba-96c6-b0fb5ca72aa2",
        "sizeRangeCode": "M58: 7: 6-10, 7.5/8.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-10, 7.5/8.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            }
        ],
        "displayValue": "M58: 7: 6-10, 7.5/8.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9e390f05-7206-4757-98d7-05fa6363683c",
        "sizeRangeCode": "M58: 7: 6-12",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-12",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 7: 6-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "259fcedd-ecbb-4c88-bb46-bbf8531e2375",
        "sizeRangeCode": "M58: 7: 7,8,9,10,11,12,13",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "7,8,9,10,11,12,13",
        "sizeList": [
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "847e1062-a04d-4276-8e90-e94c707bf6ab"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 7: 7,8,9,10,11,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7d3e9b17-b91c-4b41-8b3e-56eb37be05d0",
        "sizeRangeCode": "M58: 8: 6-10, 6.5-8.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6-10, 6.5-8.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 8: 6-10, 6.5-8.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "85060447-fab7-4e71-be56-8ca3a1b088cd",
        "sizeRangeCode": "M58: 9: 4,5,6,7,8,9,10,11,12",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "4,5,6,7,8,9,10,11,12",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b27ca335-7ba6-420e-adf4-958c5399ace3"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 9: 4,5,6,7,8,9,10,11,12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bd12f0c6-e57c-45da-ad1e-c7f6f14b6cea",
        "sizeRangeCode": "M58: 9: 5,6,7,8,9,10,11,12,13",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "5,6,7,8,9,10,11,12,13",
        "sizeList": [
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5da838cc-3e2a-4465-8daf-b23bf634be6b"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "847e1062-a04d-4276-8e90-e94c707bf6ab"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "b345f0eb-8327-4bc3-b240-38be2260a056"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            }
        ],
        "displayValue": "M58: 9: 5,6,7,8,9,10,11,12,13",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "58b884ea-8e02-49a2-bccb-d52582a6efdb",
        "sizeRangeCode": "M58: 9: 6,7,8,9,10,11,6.5,7.5,8.5",
        "sizeModelId": "fb153483-9276-426e-873e-392004602500",
        "description": "6,7,8,9,10,11,6.5,7.5,8.5",
        "sizeList": [
            {
                "id": "21ae1f23-6070-45ac-8a74-51a8f45b80ea"
            },
            {
                "id": "53cd7720-7441-49c6-8091-4b021980c57b"
            },
            {
                "id": "54e1f270-a1ed-4018-825a-16ed7aac1afe"
            },
            {
                "id": "5fcf4117-f203-4e41-80b5-d59e6fc2e963"
            },
            {
                "id": "763368a8-b05e-4b49-b7c9-23052d461352"
            },
            {
                "id": "97358599-f211-41be-9338-cc6f55ab4cee"
            },
            {
                "id": "a3d6f35e-2e84-48ba-bef3-e5878bc13f59"
            },
            {
                "id": "c3f4f035-dd9a-4230-8b8a-a9ac99cf7ec4"
            },
            {
                "id": "f92fbea5-9540-456b-aa39-6a85b7de6af6"
            }
        ],
        "displayValue": "M58: 9: 6,7,8,9,10,11,6.5,7.5,8.5",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "911be61d-1518-403c-840f-af9a1cea4bc9",
        "sizeRangeCode": "M59: 10: 28 29 30 31 32 33 34 36 38 40",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28 29 30 31 32 33 34 36 38 40",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 10: 28 29 30 31 32 33 34 36 38 40",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7dee38ec-bbb7-4fa1-b35d-cc10e415fc49",
        "sizeRangeCode": "M59: 10: 28-38, No 37",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28-38, No 37",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a677917b-7889-4ba6-abd2-e6768c0d1d89"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 10: 28-38, No 37",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f98faf74-7c0f-469d-a748-38d46c65fd86",
        "sizeRangeCode": "M59: 10: M59_NEW",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "M59_NEW",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a677917b-7889-4ba6-abd2-e6768c0d1d89"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 10: M59_NEW",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "55d9392f-50dc-4bcd-ae98-c8da3b9265f4",
        "sizeRangeCode": "M59: 11: 28, 29, 30, 31, 32, 33, 34, 36, 38, 40, 42",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28, 29, 30, 31, 32, 33, 34, 36, 38, 40, 42",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "2b1e3534-51b9-433a-b24b-20ffe2fb1409"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 11: 28, 29, 30, 31, 32, 33, 34, 36, 38, 40, 42",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f592ab33-7d1a-41c1-ac15-881875856cd6",
        "sizeRangeCode": "M59: 11: 28,29,30,31,32,33,34,35,36,38,40",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,29,30,31,32,33,34,35,36,38,40",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a677917b-7889-4ba6-abd2-e6768c0d1d89"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 11: 28,29,30,31,32,33,34,35,36,38,40",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e47e8d17-63b9-4bd8-9ea4-69615c89684e",
        "sizeRangeCode": "M59: 12: 28,29,30,31,32,33,34,35,36,38,40,42",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,29,30,31,32,33,34,35,36,38,40,42",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "2b1e3534-51b9-433a-b24b-20ffe2fb1409"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a677917b-7889-4ba6-abd2-e6768c0d1d89"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 12: 28,29,30,31,32,33,34,35,36,38,40,42",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b8f0ced2-f2f0-4a44-bd46-3eb2fbcf901f",
        "sizeRangeCode": "M59: 15: Modern Crop - SPR 21 launch CA",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "Modern Crop - SPR 21 launch CA",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "1c5c616a-fbaa-4c69-95af-0b83024cfd94"
            },
            {
                "id": "2b1e3534-51b9-433a-b24b-20ffe2fb1409"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "3f9009fa-aa29-4c50-832a-b28bb41e8015"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "73bedd88-0a80-43d1-b165-b811cce32c7e"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            },
            {
                "id": "eeca932a-6679-41ee-80e2-5a8402b7bb13"
            }
        ],
        "displayValue": "M59: 15: Modern Crop - SPR 21 launch CA",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "35532306-fcc9-4fad-943d-853841627c13",
        "sizeRangeCode": "M59: 5: 28,30,32,34,36",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,30,32,34,36",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 5: 28,30,32,34,36",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "85bfe003-341a-482d-9aa1-f8047589dd5b",
        "sizeRangeCode": "M59: 5: 30,32,34,36,38",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "30,32,34,36,38",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 5: 30,32,34,36,38",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "082a5f08-cca8-4383-9ae5-4cd49ce5c40f",
        "sizeRangeCode": "M59: 5: 32-40 EVEN",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "32-40 EVEN",
        "sizeList": [
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 5: 32-40 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6623a582-a8a0-4281-981f-70cd5032987d",
        "sizeRangeCode": "M59: 6: 28,30,32,34,36,38",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,30,32,34,36,38",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 6: 28,30,32,34,36,38",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c144572b-f790-4a39-a431-36e5becf677b",
        "sizeRangeCode": "M59: 6: 30-40 EVEN",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "30-40 EVEN",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 6: 30-40 EVEN",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "151cbd30-d65e-415e-8d05-1b3face2dab8",
        "sizeRangeCode": "M59: 7: 28,30,32,34,36,38,40",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,30,32,34,36,38,40",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 7: 28,30,32,34,36,38,40",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cf5e5ca2-ee9c-46f2-8ae1-efdb6a6bbb27",
        "sizeRangeCode": "M59: 8: 0028/0029/0030/0031/0032/0033/0034/0036",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "0028/0029/0030/0031/0032/0033/0034/0036",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 8: 0028/0029/0030/0031/0032/0033/0034/0036",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "02bee066-b4cc-4698-8a71-93ee63db01e1",
        "sizeRangeCode": "M59: 8: 29,30,31,32,33,34,36,38",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "29,30,31,32,33,34,36,38",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 8: 29,30,31,32,33,34,36,38",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "708ca6f4-4de7-47c0-b7a2-edf5eb8b16b2",
        "sizeRangeCode": "M59: 8: 30,32,34,36,38,40,42,44",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "30,32,34,36,38,40,42,44",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "2b1e3534-51b9-433a-b24b-20ffe2fb1409"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "65dbc196-0607-4983-bace-949637c0be30"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 8: 30,32,34,36,38,40,42,44",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a0ad1fd0-e532-49fb-9caa-e115deea7afc",
        "sizeRangeCode": "M59: 9: 28,29,30,31,32,33,34,35,36",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,29,30,31,32,33,34,35,36",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a677917b-7889-4ba6-abd2-e6768c0d1d89"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 9: 28,29,30,31,32,33,34,35,36",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f6262f60-d3b9-42b0-91b5-ef53db6eb6bb",
        "sizeRangeCode": "M59: 9: 28,29,30,31,32,33,34,36,38",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,29,30,31,32,33,34,36,38",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "08c0b755-d327-487b-832d-451417d55e12"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "30ddf218-712d-4841-86b3-8a9f9ee6dd34"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "7aa61682-6477-48b6-9dd3-7a957b942298"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 9: 28,29,30,31,32,33,34,36,38",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "94256bcb-a6d0-4a89-93a6-b017f74471bf",
        "sizeRangeCode": "M59: 9: 28,30,32,34,36,38,40,42,44",
        "sizeModelId": "d69d6d6f-2ad6-47c1-993c-c6d1505f5560",
        "description": "28,30,32,34,36,38,40,42,44",
        "sizeList": [
            {
                "id": "045ca8ee-52ff-4fda-97fe-5597f75b0db1"
            },
            {
                "id": "165aba3a-81f0-436c-ab6e-eab76a3a9057"
            },
            {
                "id": "18ab8106-9910-475e-a53b-1eef5b9bf8cf"
            },
            {
                "id": "2b1e3534-51b9-433a-b24b-20ffe2fb1409"
            },
            {
                "id": "5c1116cc-903b-41cd-8dcf-c8131cad03d4"
            },
            {
                "id": "65dbc196-0607-4983-bace-949637c0be30"
            },
            {
                "id": "66aa2e08-4e24-4f61-a330-b6cd6baf7b4d"
            },
            {
                "id": "a729f2d2-b863-48bc-aa68-4b0edba9872a"
            },
            {
                "id": "cc36f63d-efca-4937-be22-a7fa9e8c3160"
            }
        ],
        "displayValue": "M59: 9: 28,30,32,34,36,38,40,42,44",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "98349896-31a8-4600-8764-2fd2f24b9358",
        "sizeRangeCode": "M80: 2: 0-2 YRS,2-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-2 YRS,2-5 YRS",
        "sizeList": [
            {
                "id": "8bcdbbed-cfd4-4ddd-9e91-ac6052209df5"
            },
            {
                "id": "9fc46b3a-afa9-4603-b93d-816e8e119d4d"
            }
        ],
        "displayValue": "M80: 2: 0-2 YRS,2-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "07aaab00-cdba-4f36-9802-70fcbdde397f",
        "sizeRangeCode": "M80: 2: 2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            }
        ],
        "displayValue": "M80: 2: 2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "64a38495-1a52-4faf-9963-bd151c8977b1",
        "sizeRangeCode": "M80: 2: 2-3YRS, 4-5YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "2-3YRS, 4-5YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            }
        ],
        "displayValue": "M80: 2: 2-3YRS, 4-5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ba4678d2-d94c-4ad4-92e7-7842fdc8a201",
        "sizeRangeCode": "M80: 3: 0-2 YRS,2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-2 YRS,2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "8bcdbbed-cfd4-4ddd-9e91-ac6052209df5"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            }
        ],
        "displayValue": "M80: 3: 0-2 YRS,2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4526e4c0-7248-4282-9a71-b082af897316",
        "sizeRangeCode": "M80: 3: 12-24M,2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "12-24M,2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            }
        ],
        "displayValue": "M80: 3: 12-24M,2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "48c7d4d2-1a1a-4bec-a137-153b466b8d77",
        "sizeRangeCode": "M80: 3: 12-24M,2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "12-24M,2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            }
        ],
        "displayValue": "M80: 3: 12-24M,2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "12b0cde6-3cac-4a7a-9c42-52fbbb60f7c6",
        "sizeRangeCode": "M80: 3: M80 JPN TG COZY SOCK HOL18",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "M80 JPN TG COZY SOCK HOL18",
        "sizeList": [
            {
                "id": "36088cbe-df90-455e-8662-990b07accb6b"
            },
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            }
        ],
        "displayValue": "M80: 3: M80 JPN TG COZY SOCK HOL18",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ead6786d-90ff-441c-9d1a-d1d3c2793393",
        "sizeRangeCode": "M80: 4: 0-12M,12-24M,2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-12M,12-24M,2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "36088cbe-df90-455e-8662-990b07accb6b"
            },
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            }
        ],
        "displayValue": "M80: 4: 0-12M,12-24M,2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f29189ae-c3a1-4680-8c81-c615cdc44ffa",
        "sizeRangeCode": "M80: 4: 0-3, 3-6, 6-9, 9-12",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3, 3-6, 6-9, 9-12",
        "sizeList": [
            {
                "id": "3c2c9138-f894-4bed-a909-d43de05c76fc"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "a9121236-5186-4631-83dc-589cb0f30d57"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            }
        ],
        "displayValue": "M80: 4: 0-3, 3-6, 6-9, 9-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8bd47224-3aa5-4b8d-8b9d-cc81c5be83a9",
        "sizeRangeCode": "M80: 4: 0-3M,3-6M,6-12M,12-24M",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3M,3-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 4: 0-3M,3-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f282c81b-1c48-4541-af1e-388652358f9e",
        "sizeRangeCode": "M80: 4: 0-3M,3-6M,6-12M,12-24M",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3M,3-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 4: 0-3M,3-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "54382b15-eaac-4f89-9a9b-bd2b315cee33",
        "sizeRangeCode": "M80: 4: 0-3M,3-6M,6-9M,9-12M",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3M,3-6M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "2d810679-e965-4c27-bd30-6c3ce5897ff4"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "ec0dfe80-88d7-4e4e-be22-a675bbf9bc9c"
            }
        ],
        "displayValue": "M80: 4: 0-3M,3-6M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "141ddaea-96c8-4be2-aba0-455aac033af9",
        "sizeRangeCode": "M80: 4: 2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "55350059-2557-4f48-941a-5f67bb8d0fac"
            },
            {
                "id": "5bb70054-cada-4cb3-b4be-75f070c8ff4e"
            },
            {
                "id": "82c26f2f-5e15-426a-ae56-297f3521a71a"
            },
            {
                "id": "d4ed5d44-6d14-45ce-8e33-a0778c77ef3a"
            }
        ],
        "displayValue": "M80: 4: 2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "75a514f1-36cf-44e1-908c-3ba35407b93f",
        "sizeRangeCode": "M80: 4: 3-6, 6-12, 12-18, 18-24",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "3-6, 6-12, 12-18, 18-24",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 4: 3-6, 6-12, 12-18, 18-24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "20dd042a-d5a7-4a64-8a9e-865880017bec",
        "sizeRangeCode": "M80: 4: 6-12M,12-24M,2-3 YRS,4-5 YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "6-12M,12-24M,2-3 YRS,4-5 YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 4: 6-12M,12-24M,2-3 YRS,4-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3b26d230-33cc-4678-82ea-df823c52349d",
        "sizeRangeCode": "M80: 5: 0-3, 3-6, 6-12, 12-18, 18-24",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3, 3-6, 6-12, 12-18, 18-24",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 5: 0-3, 3-6, 6-12, 12-18, 18-24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c3b3774a-23a5-444b-b21f-a19439fd98d4",
        "sizeRangeCode": "M80: 5: 0-3M, 3-6M, 12-18M, 6YRS, 6-7YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-3M, 3-6M, 12-18M, 6YRS, 6-7YRS",
        "sizeList": [
            {
                "id": "3c2c9138-f894-4bed-a909-d43de05c76fc"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "a9121236-5186-4631-83dc-589cb0f30d57"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            }
        ],
        "displayValue": "M80: 5: 0-3M, 3-6M, 12-18M, 6YRS, 6-7YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c17c4396-cf6c-46a9-9d13-c5db01a04b8a",
        "sizeRangeCode": "M80: 5: 0-6M, 6-12M, 12-24M, 2-3YRS, 4-5YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "0-6M, 6-12M, 12-24M, 2-3YRS, 4-5YRS",
        "sizeList": [
            {
                "id": "63e3a949-bcb5-4045-97ac-1c31fa502097"
            },
            {
                "id": "76fcb51d-e091-4369-b9cf-34a504639742"
            },
            {
                "id": "bc81fd96-a912-443b-b4aa-2049d2455f6a"
            },
            {
                "id": "e5f8224d-cf97-4c4a-8f9f-6c981931f593"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 5: 0-6M, 6-12M, 12-24M, 2-3YRS, 4-5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "36e11a46-5321-4911-89fc-676ebbbb352d",
        "sizeRangeCode": "M80: 5: 00/07,00/30,03/06,06/09,09/12",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "00/07,00/30,03/06,06/09,09/12",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "2d810679-e965-4c27-bd30-6c3ce5897ff4"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "ec0dfe80-88d7-4e4e-be22-a675bbf9bc9c"
            }
        ],
        "displayValue": "M80: 5: 00/07,00/30,03/06,06/09,09/12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0a6348f0-f95e-4508-b848-2aabf0badf0b",
        "sizeRangeCode": "M80: 5: 1-5001",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "1-5001",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "a9121236-5186-4631-83dc-589cb0f30d57"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e1b88583-c68f-48f8-a958-423494e7d37e"
            }
        ],
        "displayValue": "M80: 5: 1-5001",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9619bacc-3f54-4316-a9c5-7d0f4d80b4ff",
        "sizeRangeCode": "M80: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "55350059-2557-4f48-941a-5f67bb8d0fac"
            },
            {
                "id": "5bb70054-cada-4cb3-b4be-75f070c8ff4e"
            },
            {
                "id": "82c26f2f-5e15-426a-ae56-297f3521a71a"
            },
            {
                "id": "d4ed5d44-6d14-45ce-8e33-a0778c77ef3a"
            }
        ],
        "displayValue": "M80: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9354863a-8e1a-49c4-8fa6-38def97afe48",
        "sizeRangeCode": "M80: 5: PREMIE TO 6-9M",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "PREMIE TO 6-9M",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "2d810679-e965-4c27-bd30-6c3ce5897ff4"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e1b88583-c68f-48f8-a958-423494e7d37e"
            }
        ],
        "displayValue": "M80: 5: PREMIE TO 6-9M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f9f94c94-48d5-49df-bbef-6c3b919639e6",
        "sizeRangeCode": "M80: 6: 1-5002",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "1-5002",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "3c2c9138-f894-4bed-a909-d43de05c76fc"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "a9121236-5186-4631-83dc-589cb0f30d57"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e1b88583-c68f-48f8-a958-423494e7d37e"
            }
        ],
        "displayValue": "M80: 6: 1-5002",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6510185c-a711-4c6d-b710-e0d5472d9c84",
        "sizeRangeCode": "M80: 6: 12-18M,18-24M,2-5YRS",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "12-18M,18-24M,2-5YRS",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "55350059-2557-4f48-941a-5f67bb8d0fac"
            },
            {
                "id": "5bb70054-cada-4cb3-b4be-75f070c8ff4e"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "82c26f2f-5e15-426a-ae56-297f3521a71a"
            },
            {
                "id": "d4ed5d44-6d14-45ce-8e33-a0778c77ef3a"
            }
        ],
        "displayValue": "M80: 6: 12-18M,18-24M,2-5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dae4f570-333e-451e-917c-c3a9c2dede29",
        "sizeRangeCode": "M80: 6: PREMIE TO 9-12M",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "PREMIE TO 9-12M",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "2d810679-e965-4c27-bd30-6c3ce5897ff4"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e1b88583-c68f-48f8-a958-423494e7d37e"
            },
            {
                "id": "ec0dfe80-88d7-4e4e-be22-a675bbf9bc9c"
            }
        ],
        "displayValue": "M80: 6: PREMIE TO 9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1f1eff30-6262-40fc-93bf-a955b86b011f",
        "sizeRangeCode": "M80: 6: Up to 7lbs, 0-3, 3-6, 12-18, 6-9, 9-12",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "Up to 7lbs, 0-3, 3-6, 12-18, 6-9, 9-12",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "3c2c9138-f894-4bed-a909-d43de05c76fc"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "a9121236-5186-4631-83dc-589cb0f30d57"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            }
        ],
        "displayValue": "M80: 6: Up to 7lbs, 0-3, 3-6, 12-18, 6-9, 9-12",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "486c63ee-399d-425d-9b21-b66792d2d35d",
        "sizeRangeCode": "M80: 6: Up to 7lbs, 0-3, 3-6, 6-12, 12-18, 18-24",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "Up to 7lbs, 0-3, 3-6, 6-12, 12-18, 18-24",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 6: Up to 7lbs, 0-3, 3-6, 6-12, 12-18, 18-24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "048cf8cb-e439-49b1-90fb-99cf0c427014",
        "sizeRangeCode": "M80: 7: 06/12,12/18,18/24,20/00,30/00,40/00,50/00",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "06/12,12/18,18/24,20/00,30/00,40/00,50/00",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "55350059-2557-4f48-941a-5f67bb8d0fac"
            },
            {
                "id": "5bb70054-cada-4cb3-b4be-75f070c8ff4e"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "82c26f2f-5e15-426a-ae56-297f3521a71a"
            },
            {
                "id": "d4ed5d44-6d14-45ce-8e33-a0778c77ef3a"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 7: 06/12,12/18,18/24,20/00,30/00,40/00,50/00",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ea2fdee8-5a4f-4c68-889c-cf89eb271dda",
        "sizeRangeCode": "M80: 7: 1-18_24",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "1-18_24",
        "sizeList": [
            {
                "id": "1930ed88-50b3-44fa-8536-e3e06593728c"
            },
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "e1b88583-c68f-48f8-a958-423494e7d37e"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 7: 1-18_24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3ff7a4c7-4bc7-4dc8-a555-e011924f8883",
        "sizeRangeCode": "M80: 9: EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 1",
        "sizeModelId": "bf7bd4b4-7600-480f-892f-8a77512f0bda",
        "description": "EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 1",
        "sizeList": [
            {
                "id": "1d9aeab3-72bf-4393-b4a9-74e65768ea95"
            },
            {
                "id": "55350059-2557-4f48-941a-5f67bb8d0fac"
            },
            {
                "id": "5bb70054-cada-4cb3-b4be-75f070c8ff4e"
            },
            {
                "id": "5c651275-7156-49e4-87e9-92f73abc314f"
            },
            {
                "id": "619197ed-e916-4ce6-8cdc-c1509882a94c"
            },
            {
                "id": "82c26f2f-5e15-426a-ae56-297f3521a71a"
            },
            {
                "id": "cd621186-04f3-4018-8580-78e76e6a51aa"
            },
            {
                "id": "d4ed5d44-6d14-45ce-8e33-a0778c77ef3a"
            },
            {
                "id": "f86e9035-1346-4a9f-9df5-8651446f1835"
            }
        ],
        "displayValue": "M80: 9: EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 1",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "15a58e28-2642-4098-9872-e630ddf8760a",
        "sizeRangeCode": "M81: 11: 12-18M, 18-24M, 2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "12-18M, 18-24M, 2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "5fe52e6d-c1db-4a6a-bd55-1410854df6ec"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "8ef56131-8cbf-432b-8d01-20b194dca8fa"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "a8b9616c-ecba-4e0c-9877-6848956adc7e"
            },
            {
                "id": "db3da221-4555-4b3b-929c-e4585a5d7918"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            },
            {
                "id": "efc8038c-e904-4063-893d-26913db26cc1"
            }
        ],
        "displayValue": "M81: 11: 12-18M, 18-24M, 2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "31f18fb6-c8e2-4da8-9c98-1c04ba5ba0c3",
        "sizeRangeCode": "M81: 3: 0-6M,6-12M,12-24M",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "0-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "c631bc92-b900-4284-804f-a71ae309d956"
            },
            {
                "id": "d0ed01dc-701a-4a38-b6f8-a9e9b910b187"
            }
        ],
        "displayValue": "M81: 3: 0-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8e3b4b41-4c27-4e63-9b08-358f12a76961",
        "sizeRangeCode": "M81: 4: 0-3M,3-6M,6-12M,12-18M",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "0-3M,3-6M,6-12M,12-18M",
        "sizeList": [
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "881e1b48-5bbb-4134-84be-82b9a8a02e0f"
            },
            {
                "id": "e30bd160-bb9a-458c-9f83-174bc129f737"
            }
        ],
        "displayValue": "M81: 4: 0-3M,3-6M,6-12M,12-18M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "09376290-4d4b-4644-8a7c-6a7da17767a6",
        "sizeRangeCode": "M81: 4: 0-3M,3-6M,6-12M,12-24M",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "0-3M,3-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "4a7f5697-ecd1-4008-9cd6-e61b8df95925"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "881e1b48-5bbb-4134-84be-82b9a8a02e0f"
            },
            {
                "id": "c631bc92-b900-4284-804f-a71ae309d956"
            }
        ],
        "displayValue": "M81: 4: 0-3M,3-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ad5f8c49-71a0-49e4-9977-c8187b37c3bb",
        "sizeRangeCode": "M81: 4: 2T,3T,4T,5T",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "2T,3T,4T,5T",
        "sizeList": [
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            }
        ],
        "displayValue": "M81: 4: 2T,3T,4T,5T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ae5dc562-c01f-44e5-a202-b168628ab131",
        "sizeRangeCode": "M81: 4: 3-6M,6-12M,12-18M,18-24M",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "3-6M,6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "881e1b48-5bbb-4134-84be-82b9a8a02e0f"
            }
        ],
        "displayValue": "M81: 4: 3-6M,6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "010e425e-4e73-4415-818c-b6abc22c5903",
        "sizeRangeCode": "M81: 5: 0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "881e1b48-5bbb-4134-84be-82b9a8a02e0f"
            },
            {
                "id": "e30bd160-bb9a-458c-9f83-174bc129f737"
            }
        ],
        "displayValue": "M81: 5: 0-3M,3-6M,6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a2e850e4-993a-47ef-9f19-62cb06876d3a",
        "sizeRangeCode": "M81: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            }
        ],
        "displayValue": "M81: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2aa082bd-d031-476b-bbd2-7d83f3399c7b",
        "sizeRangeCode": "M81: 6: 12-18M,18-24M,2T,3T,4T,5T",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "12-18M,18-24M,2T,3T,4T,5T",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            }
        ],
        "displayValue": "M81: 6: 12-18M,18-24M,2T,3T,4T,5T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "77ccb900-9789-4dd7-9128-bbe9d8d6089f",
        "sizeRangeCode": "M81: 7: M81: 6-12 to 5T",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "M81: 6-12 to 5T",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            }
        ],
        "displayValue": "M81: 7: M81: 6-12 to 5T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "41f4ec5e-fc7f-4999-a26a-79f5ace3457d",
        "sizeRangeCode": "M81: 9: EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 2",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 2",
        "sizeList": [
            {
                "id": "00d2ab4b-5412-4ea6-b358-de913346ea12"
            },
            {
                "id": "655c4b67-c98a-49e5-b16d-9fb7b206c18b"
            },
            {
                "id": "6a37eacd-b0a5-4b2b-95e7-81091d303dba"
            },
            {
                "id": "881e1b48-5bbb-4134-84be-82b9a8a02e0f"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e30bd160-bb9a-458c-9f83-174bc129f737"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            }
        ],
        "displayValue": "M81: 9: EUOL TODDLER SIZE PROFILE REQUEST - 0902 - 2",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "26a94093-af7a-40a2-b4cc-33666b77469b",
        "sizeRangeCode": "M81: 9: Master Template - Custom Size Profile Request-BOYS FAHO22",
        "sizeModelId": "516da3b2-5965-4dbd-9c67-4e7d0a43df9e",
        "description": "Master Template - Custom Size Profile Request-BOYS FAHO22",
        "sizeList": [
            {
                "id": "5fe52e6d-c1db-4a6a-bd55-1410854df6ec"
            },
            {
                "id": "8ef56131-8cbf-432b-8d01-20b194dca8fa"
            },
            {
                "id": "929a2e96-4a79-4ebe-857b-f7f44389d37b"
            },
            {
                "id": "a8b9616c-ecba-4e0c-9877-6848956adc7e"
            },
            {
                "id": "db3da221-4555-4b3b-929c-e4585a5d7918"
            },
            {
                "id": "e07b9e4f-728d-41ab-8268-fdb727bc49c2"
            },
            {
                "id": "e37ef75f-13e4-4f2b-94f1-0046a807266d"
            },
            {
                "id": "e5db384e-4072-406a-9bed-70733620fe81"
            },
            {
                "id": "efc8038c-e904-4063-893d-26913db26cc1"
            }
        ],
        "displayValue": "M81: 9: Master Template - Custom Size Profile Request-BOYS FAHO22",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1c4b03d6-2e6b-4c8c-b5dd-3d15cca161eb",
        "sizeRangeCode": "M83: 6: 5-10",
        "sizeModelId": "86240cfb-f185-40b5-8257-7754f365e567",
        "description": "5-10",
        "sizeList": [
            {
                "id": "113e1eb2-15d3-4a3a-ae99-d0fbb6313f34"
            },
            {
                "id": "14262d8d-8633-4154-9cb8-6d7b48930d18"
            },
            {
                "id": "42e2110c-cd37-4b01-8f50-994b79d16e75"
            },
            {
                "id": "89944c4b-ad4a-4134-ba08-ed8d0bc09604"
            },
            {
                "id": "a31e6641-6d04-45f0-a838-3185f2c9f27c"
            },
            {
                "id": "bcf97227-5084-4112-b4c5-33d486eb1850"
            }
        ],
        "displayValue": "M83: 6: 5-10",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "80a2e779-43b0-4afd-87ef-db93c204de15",
        "sizeRangeCode": "M83: 7: 5-11",
        "sizeModelId": "86240cfb-f185-40b5-8257-7754f365e567",
        "description": "5-11",
        "sizeList": [
            {
                "id": "113e1eb2-15d3-4a3a-ae99-d0fbb6313f34"
            },
            {
                "id": "14262d8d-8633-4154-9cb8-6d7b48930d18"
            },
            {
                "id": "1da2d6ed-4d79-439d-9f2e-82657c651737"
            },
            {
                "id": "42e2110c-cd37-4b01-8f50-994b79d16e75"
            },
            {
                "id": "89944c4b-ad4a-4134-ba08-ed8d0bc09604"
            },
            {
                "id": "a31e6641-6d04-45f0-a838-3185f2c9f27c"
            },
            {
                "id": "bcf97227-5084-4112-b4c5-33d486eb1850"
            }
        ],
        "displayValue": "M83: 7: 5-11",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "de948de1-8e9c-4c3f-9754-41240f524cce",
        "sizeRangeCode": "M83: 9: 2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "sizeModelId": "86240cfb-f185-40b5-8257-7754f365e567",
        "description": "2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "sizeList": [
            {
                "id": "0cb6f4a3-4e72-4a34-ac0b-2f6ecb149c23"
            },
            {
                "id": "11b7ff09-a4c0-4ad9-87fb-3c3b5aea8c30"
            },
            {
                "id": "4df73a92-5e0e-43d2-b57b-4066464740f9"
            },
            {
                "id": "89944c4b-ad4a-4134-ba08-ed8d0bc09604"
            },
            {
                "id": "a31e6641-6d04-45f0-a838-3185f2c9f27c"
            },
            {
                "id": "a5b2fad6-4992-4387-82d7-52535a76706f"
            },
            {
                "id": "bcf97227-5084-4112-b4c5-33d486eb1850"
            },
            {
                "id": "c100aec0-8df8-4960-b3ca-1159c2beb179"
            },
            {
                "id": "fb2fbdd5-cb63-4f38-be76-d77b10c0dcf0"
            }
        ],
        "displayValue": "M83: 9: 2T, 3T, 4T, 5T, 6, 8, 10, 12, 14",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5c8271b3-9a65-4b69-bea9-98dce90e56e2",
        "sizeRangeCode": "M90: 1: ONESIZE",
        "sizeModelId": "0874af27-a77c-4712-9b32-b1e70e382ef7",
        "description": "ONESIZE",
        "sizeList": [
            {
                "id": "e1656ac7-1cc1-40ce-b485-989bba9d758d"
            }
        ],
        "displayValue": "M90: 1: ONESIZE",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e02e881c-224d-4a1f-a219-7f4868711f85",
        "sizeRangeCode": "M93: 1: 0-3M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M",
        "sizeList": [
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 1: 0-3M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "88047eb9-845f-46f5-9225-43f78b1c49e5",
        "sizeRangeCode": "M93: 2: 0-3M,3-6M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 2: 0-3M,3-6M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b7584757-078b-4780-86be-83d20089615a",
        "sizeRangeCode": "M93: 2: 0-6M,6-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M,6-12M",
        "sizeList": [
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 2: 0-6M,6-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "b715005b-d044-43b6-9f70-ee5611ec1109",
        "sizeRangeCode": "M93: 2: 12-18,18-24",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18,18-24",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            }
        ],
        "displayValue": "M93: 2: 12-18,18-24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "400a1fb3-98a1-4c58-bbed-7692c47bc82f",
        "sizeRangeCode": "M93: 2: 12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            }
        ],
        "displayValue": "M93: 2: 12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fb04bb03-a7f0-4a50-bd55-c5decbc03eab",
        "sizeRangeCode": "M93: 2: 3-6M,6-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,6-12M",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 2: 3-6M,6-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7c92f185-51ec-42d2-8631-70c2aa89b46a",
        "sizeRangeCode": "M93: 2: M93:4000:5000",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "M93:4000:5000",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            }
        ],
        "displayValue": "M93: 2: M93:4000:5000",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d9c42982-0db9-4744-8477-f0a6c8e23b08",
        "sizeRangeCode": "M93: 2: UPTO7LB, 0-3M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB, 0-3M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 2: UPTO7LB, 0-3M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7d9bb011-412e-4449-a0f3-79485d2a2379",
        "sizeRangeCode": "M93: 3: 0-3M,3-6M,6-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-12M",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 0-3M,3-6M,6-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6af14bcc-038e-4140-80e2-d44131eadb7e",
        "sizeRangeCode": "M93: 3: 0-3M,3-6M,6-9M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-9M",
        "sizeList": [
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 3: 0-3M,3-6M,6-9M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c519fd18-cb6a-4549-b5cb-64431fab64cf",
        "sizeRangeCode": "M93: 3: 0-3M,3-6M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,9-12M",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 3: 0-3M,3-6M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8dceadde-1f00-401f-8424-4a3d47ba0e70",
        "sizeRangeCode": "M93: 3: 0-6M to 12-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M to 12-24M",
        "sizeList": [
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 0-6M to 12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7b6cde31-9c5d-4430-8b8f-1352d7a30f6a",
        "sizeRangeCode": "M93: 3: 0-6M,6-12M,12-18M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M,6-12M,12-18M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 0-6M,6-12M,12-18M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "174e9157-ac1a-43a0-ad95-656163898ea1",
        "sizeRangeCode": "M93: 3: 0-6M,6-12M,12-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 0-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "53cb6213-18d3-436a-b139-e3ca2b2d9a69",
        "sizeRangeCode": "M93: 3: 0030,0036,0612",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0030,0036,0612",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 0030,0036,0612",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4ba5052d-6d17-4dd1-907c-7b611faee2d6",
        "sizeRangeCode": "M93: 3: 2000,3000,4000",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "2000,3000,4000",
        "sizeList": [
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 3: 2000,3000,4000",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8ce9772c-fc37-43f8-8a30-9b44db96dce6",
        "sizeRangeCode": "M93: 3: 3-6M TO 18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M TO 18-24M",
        "sizeList": [
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 3-6M TO 18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8fb83a03-64e5-488d-977f-d7eb243e4b17",
        "sizeRangeCode": "M93: 3: 3-6M,12-18M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,12-18M,9-12M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 3: 3-6M,12-18M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1e396f6b-24b3-4a2e-a444-3efb796c0ab6",
        "sizeRangeCode": "M93: 3: 3-6M,6-12M,12-18M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,6-12M,12-18M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 3-6M,6-12M,12-18M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a5ddfa45-813a-4edb-bceb-e8e5476bcdad",
        "sizeRangeCode": "M93: 3: 3-6M,6-12M,12-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 3-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e36fc2af-2065-4c4c-ac2b-5aaf691b19b6",
        "sizeRangeCode": "M93: 3: 3YRS, 4YRS, 5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3YRS, 4YRS, 5YRS",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 3: 3YRS, 4YRS, 5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1e2b5ae3-0527-48a5-bfaa-bc8db563f168",
        "sizeRangeCode": "M93: 3: 6-12M, 12-18M, 18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12M, 12-18M, 18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 6-12M, 12-18M, 18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "73ec8ce4-bade-4c4f-abd4-d769643b5958",
        "sizeRangeCode": "M93: 3: 6-12M,12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 3: 6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e27baf79-0711-4f6e-bba4-fda41a51bb90",
        "sizeRangeCode": "M93: 3: UPTO7LB,0-3M,3-6M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 3: UPTO7LB,0-3M,3-6M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "815fe660-f5b4-4553-9913-6b79f6d46a90",
        "sizeRangeCode": "M93: 4: 0-3M,3-6M,6-12M,12-18M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-12M,12-18M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 4: 0-3M,3-6M,6-12M,12-18M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "10bc2dfa-c366-42a1-bafc-0f61f08b1b5a",
        "sizeRangeCode": "M93: 4: 0-3M,3-6M,6-12M,12-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-12M,12-24M",
        "sizeList": [
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 4: 0-3M,3-6M,6-12M,12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70b127b8-9f44-44af-99d5-13b7f2bb634c",
        "sizeRangeCode": "M93: 4: 0-3M,3-6M,6-9M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 4: 0-3M,3-6M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8dac1411-75c1-4715-9c94-b2669d63509a",
        "sizeRangeCode": "M93: 4: 0-6M, 6-12M,12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M, 6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 4: 0-6M, 6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "48bea386-387e-4353-8c53-ffba69334306",
        "sizeRangeCode": "M93: 4: 0036,0612,1218,1824",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0036,0612,1218,1824",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 4: 0036,0612,1218,1824",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "2fd6bedf-cf2b-42e9-b699-49325b530580",
        "sizeRangeCode": "M93: 4: 12-18M,18-24M,2YRS,3YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18M,18-24M,2YRS,3YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 4: 12-18M,18-24M,2YRS,3YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "6c3bc21a-abfe-4c6a-903b-554fcd155bd6",
        "sizeRangeCode": "M93: 4: 18-24M,2YRS,3YRS,4YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "18-24M,2YRS,3YRS,4YRS",
        "sizeList": [
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 4: 18-24M,2YRS,3YRS,4YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0f1a85a4-cd67-43b6-b148-f9ed475ad76d",
        "sizeRangeCode": "M93: 4: 2YRS, 3YRS, 4YRS, 5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "2YRS, 3YRS, 4YRS, 5YRS",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 4: 2YRS, 3YRS, 4YRS, 5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5946315c-be07-4741-929f-5a18679805d7",
        "sizeRangeCode": "M93: 4: 2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 4: 2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "76576b46-13c7-4f60-bcdc-cd93919fa021",
        "sizeRangeCode": "M93: 4: UPTO7LB,0-3M,3-6M,6-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,6-12M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 4: UPTO7LB,0-3M,3-6M,6-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "511ffb96-3ce9-4a91-b977-2a7f7c961dc1",
        "sizeRangeCode": "M93: 4: UPTO7LB,0-3M,3-6M,6-9M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,6-9M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            }
        ],
        "displayValue": "M93: 4: UPTO7LB,0-3M,3-6M,6-9M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c081c0ab-49f3-4b08-883a-3cfd1e696fb6",
        "sizeRangeCode": "M93: 5: 0-12M,12-24M,2T, 3T,4T",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-12M,12-24M,2T, 3T,4T",
        "sizeList": [
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "ca63a9d4-fb30-45a5-b34c-f0f09c62b070"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 5: 0-12M,12-24M,2T, 3T,4T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "afc2bd8a-e2e9-423e-9a79-fc1a9fa39757",
        "sizeRangeCode": "M93: 5: 0-12M,12-24M,2T,3T,5T",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-12M,12-24M,2T,3T,5T",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "ca63a9d4-fb30-45a5-b34c-f0f09c62b070"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 5: 0-12M,12-24M,2T,3T,5T",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "fab8c4d3-3114-4115-977b-a8b7ccb20228",
        "sizeRangeCode": "M93: 5: 0-3M, 3-6M, 6-12M,12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M, 3-6M, 6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 5: 0-3M, 3-6M, 6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e52d99cf-d527-4513-b784-890553049a39",
        "sizeRangeCode": "M93: 5: 0-3M,3-6M,12-18M,6-9M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,12-18M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 5: 0-3M,3-6M,12-18M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "46c97e50-6da4-45f8-9b41-4c3de0507e79",
        "sizeRangeCode": "M93: 5: 0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 5: 0-3M,3-6M,6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "50404378-ae80-42b8-856a-46a3c7696cd7",
        "sizeRangeCode": "M93: 5: 0-6M, UPTO7LB, 6-12M, 12-18M, 18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M, UPTO7LB, 6-12M, 12-18M, 18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 5: 0-6M, UPTO7LB, 6-12M, 12-18M, 18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "66dc419f-5748-4394-90c2-2a4d6553c473",
        "sizeRangeCode": "M93: 5: 12-18M,18-24M,2YRS,3YRS,4YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18M,18-24M,2YRS,3YRS,4YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 5: 12-18M,18-24M,2YRS,3YRS,4YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cc7c117d-6fcc-46f5-9df4-adefeabf99a7",
        "sizeRangeCode": "M93: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 5: 18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "24f334a4-37fe-49eb-9815-c086aa9eb739",
        "sizeRangeCode": "M93: 5: 6-12,12-18,18-24,2,3",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12,12-18,18-24,2,3",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 5: 6-12,12-18,18-24,2,3",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "164b7d2e-d27b-4b7d-8f01-66b81b92691b",
        "sizeRangeCode": "M93: 5: UPTO7LB,0-3M,3-6M,6-12M,12-18M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,6-12M,12-18M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 5: UPTO7LB,0-3M,3-6M,6-12M,12-18M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5150b39b-75f3-4d5c-832f-0c42d09157b4",
        "sizeRangeCode": "M93: 5: UPTO7LB,0-3M,3-6M,6-9M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 5: UPTO7LB,0-3M,3-6M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "dd10eb8e-4b91-4061-9953-39db323e6cbb",
        "sizeRangeCode": "M93: 5: Up to 3M to 18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "Up to 3M to 18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 5: Up to 3M to 18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1f908204-003e-443f-b695-a5e3a48c2302",
        "sizeRangeCode": "M93: 6: 0-3M,3-6M,6-9M,9-12M,12-18M,18-24",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M,3-6M,6-9M,9-12M,12-18M,18-24",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            }
        ],
        "displayValue": "M93: 6: 0-3M,3-6M,6-9M,9-12M,12-18M,18-24",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a486a240-6418-472c-8f0c-abbe519362b0",
        "sizeRangeCode": "M93: 6: 12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 6: 12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a71caadf-184e-495d-94c8-7c507c6636df",
        "sizeRangeCode": "M93: 6: 3-6M,6-12M,12-18M,18-24M,2YRS,3YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,6-12M,12-18M,18-24M,2YRS,3YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 6: 3-6M,6-12M,12-18M,18-24M,2YRS,3YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ab563463-bf07-4031-9d28-71c40e3038e8",
        "sizeRangeCode": "M93: 6: 6-12M, 12-18M, 18-24M, 2YRS, 3YRS, 4YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12M, 12-18M, 18-24M, 2YRS, 3YRS, 4YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 6: 6-12M, 12-18M, 18-24M, 2YRS, 3YRS, 4YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "61c67f5e-e66c-4f95-ad1a-f2d1cb78b9e9",
        "sizeRangeCode": "M93: 6: UPTO7LB, 0-3M, 3-6M, 6-9M, 9-12M, 12-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB, 0-3M, 3-6M, 6-9M, 9-12M, 12-24M",
        "sizeList": [
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "5f555c06-0dda-4074-91e6-24a1ee31c979"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 6: UPTO7LB, 0-3M, 3-6M, 6-9M, 9-12M, 12-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9ac6d95d-953b-454f-8883-83d485c6ac50",
        "sizeRangeCode": "M93: 6: UPTO7LB,0-3M,3-6M,12-18M,6-9M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,12-18M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            }
        ],
        "displayValue": "M93: 6: UPTO7LB,0-3M,3-6M,12-18M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7a8ef07b-9c76-4467-a954-1acd4227a0b2",
        "sizeRangeCode": "M93: 6: UPTO7LB,0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,6-12M,12-18M,18-24M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            }
        ],
        "displayValue": "M93: 6: UPTO7LB,0-3M,3-6M,6-12M,12-18M,18-24M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "a2eb55e1-6b62-43ea-bf39-bb2604908846",
        "sizeRangeCode": "M93: 7: 12-18M,18-24M,2YRS,3YRS,4YRS,5YRS,6YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "12-18M,18-24M,2YRS,3YRS,4YRS,5YRS,6YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "3f14a196-1f3b-4210-8b1a-b392fca93a25"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 7: 12-18M,18-24M,2YRS,3YRS,4YRS,5YRS,6YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "48142687-d1e8-45b5-a124-1d856a923dc9",
        "sizeRangeCode": "M93: 7: 6-12M,12-18M,18-24M to 2 YRS-5 YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12M,12-18M,18-24M to 2 YRS-5 YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 7: 6-12M,12-18M,18-24M to 2 YRS-5 YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0d7c0afe-56a3-4a15-99d6-2b163cd52cc7",
        "sizeRangeCode": "M93: 7: 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 7: 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "75c9d92e-0020-4dd3-94fa-9c3cfbcbf99c",
        "sizeRangeCode": "M93: 7: UPTO7LB,0-3M,3-6M,12-18M,18-24M,6-9M,9-12M",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "UPTO7LB,0-3M,3-6M,12-18M,18-24M,6-9M,9-12M",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "2a2ee5d2-c726-43b4-a9dd-3922c9cfc9e9"
            },
            {
                "id": "85c7f201-d026-47d4-a58e-1a094d7a8f06"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "c54e199f-6274-416b-9942-ee5eb61bfbb7"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            }
        ],
        "displayValue": "M93: 7: UPTO7LB,0-3M,3-6M,12-18M,18-24M,6-9M,9-12M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70c12d11-5c10-4d04-a095-bfbd85fed09c",
        "sizeRangeCode": "M93: 8: 0-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "bf500cd8-e17d-4545-9c47-9c36902b11ae"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 8: 0-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "67c49074-a123-4978-8b71-070ae21854b3",
        "sizeRangeCode": "M93: 8: 3-6M,6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "3-6M,6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 8: 3-6M,6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "7084e466-4914-4f9a-8fce-c2dd2b04881e",
        "sizeRangeCode": "M93: 9: 0-3M, 3-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeModelId": "2a6acc1c-2e63-4b21-a677-6ac70e06671f",
        "description": "0-3M, 3-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "sizeList": [
            {
                "id": "0bf55801-985a-41ab-8349-9ff8ac4a97d7"
            },
            {
                "id": "0c501ea1-119b-490c-bd5f-0c41dc81c93b"
            },
            {
                "id": "199dd9ad-16bf-4058-b7ca-12bbeb4fd4ac"
            },
            {
                "id": "864a58f9-aeca-4a5c-ab5b-0822f5161b55"
            },
            {
                "id": "94c31e1e-5ff2-4c56-9b59-dc4ff67da623"
            },
            {
                "id": "d85f8abb-849b-44d3-b48e-1eec05b4406b"
            },
            {
                "id": "e5fcf8f5-044f-4c3a-b6a9-27478a1e5aea"
            },
            {
                "id": "ea065946-b55f-45c6-879e-a80d9689bdbe"
            },
            {
                "id": "f08217c0-bf82-4e87-b142-db5e6140c12b"
            }
        ],
        "displayValue": "M93: 9: 0-3M, 3-6M, 6-12M,12-18M,18-24M,2YRS,3YRS,4YRS,5YRS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "29828c86-aa64-4778-9f6b-15744712aa04",
        "sizeRangeCode": "M97: 1: L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            }
        ],
        "displayValue": "M97: 1: L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "95b2ae58-21b8-47a5-ab5b-e934fde7b803",
        "sizeRangeCode": "M97: 1: M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "M",
        "sizeList": [
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 1: M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "bd5fa018-25fa-4801-b67a-746bd19af72f",
        "sizeRangeCode": "M97: 1: M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "M/L",
        "sizeList": [
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 1: M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "be7ec0a4-3efe-4c22-b7da-22ebb94677c2",
        "sizeRangeCode": "M97: 1: ONESIZE",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "ONESIZE",
        "sizeList": [
            {
                "id": "50fe985c-09ee-4554-a2b0-dae41f5cf688"
            }
        ],
        "displayValue": "M97: 1: ONESIZE",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8414ad67-6bd9-4032-bb71-45a1e41a1538",
        "sizeRangeCode": "M97: 1: ONESIZE FAL21",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "ONESIZE FAL21",
        "sizeList": [
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 1: ONESIZE FAL21",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "06c70ef1-f568-4d58-8dac-f385240be827",
        "sizeRangeCode": "M97: 1: ONESIZE_XS",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "ONESIZE_XS",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            }
        ],
        "displayValue": "M97: 1: ONESIZE_XS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "d8252703-c869-4359-9a1a-04acb6c6139d",
        "sizeRangeCode": "M97: 1: S",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S",
        "sizeList": [
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            }
        ],
        "displayValue": "M97: 1: S",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c6c3d788-7f48-4ac0-813c-6741c6460582",
        "sizeRangeCode": "M97: 2: S,M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S,M",
        "sizeList": [
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 2: S,M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "67b3b3a0-94d0-4f58-b8ed-9dcfe6e0f686",
        "sizeRangeCode": "M97: 2: S/M,  M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S/M,  M/L",
        "sizeList": [
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 2: S/M,  M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "44261259-bfc6-4f42-b338-6702b8124987",
        "sizeRangeCode": "M97: 2: S/M, L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S/M, L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 2: S/M, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e8472b48-8e2f-440f-b106-84876b5849d1",
        "sizeRangeCode": "M97: 2: S/M, L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S/M, L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 2: S/M, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1b6a521c-0077-4f94-b3b3-34f7a16ae5db",
        "sizeRangeCode": "M97: 2: XS/S,M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S,M/L",
        "sizeList": [
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 2: XS/S,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "33ce0959-54bb-4c62-b5fc-f6e37200a49e",
        "sizeRangeCode": "M97: 2: XS/S,M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S,M/L",
        "sizeList": [
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 2: XS/S,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "192174d7-bada-4914-b78e-ffe4d4da5694",
        "sizeRangeCode": "M97: 2: XXS/XS,S/M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS/XS,S/M",
        "sizeList": [
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 2: XXS/XS,S/M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "3ad8f3cc-9d85-4b9c-9916-47e6d323a75f",
        "sizeRangeCode": "M97: 3: ONESIZE,S/M,M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "ONESIZE,S/M,M/L",
        "sizeList": [
            {
                "id": "50fe985c-09ee-4554-a2b0-dae41f5cf688"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: ONESIZE,S/M,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e3fa9f70-8970-414c-80d3-986e5f483818",
        "sizeRangeCode": "M97: 3: S, M, L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S, M, L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 3: S, M, L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "4ed99e96-416c-409a-a216-2a253a27b657",
        "sizeRangeCode": "M97: 3: S,M,L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S,M,L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 3: S,M,L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9fc2ce5a-73a5-4f1f-9eba-8601efa96e89",
        "sizeRangeCode": "M97: 3: S/M M/L L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S/M M/L L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: S/M M/L L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "62b3e680-8de0-4679-aea3-b3cb25c2875e",
        "sizeRangeCode": "M97: 3: S/M,M/L,L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S/M,M/L,L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: S/M,M/L,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "945e4cae-d1b7-4eeb-b6fd-dfa39a90cc94",
        "sizeRangeCode": "M97: 3: XS,S,M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS,S,M",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 3: XS,S,M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "10fafe45-5f8f-4981-9068-84d382cf6c40",
        "sizeRangeCode": "M97: 3: XS-M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS-M",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 3: XS-M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "89bf8cda-9f9e-4239-a8b6-e0442a3c46b1",
        "sizeRangeCode": "M97: 3: XS/S - L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S - L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 3: XS/S - L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f7db79de-2f8a-4215-840a-8a163d8b8f58",
        "sizeRangeCode": "M97: 3: XS/S - L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S - L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 3: XS/S - L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ebe4d8a3-210d-4170-a512-0fdd6c6f04a6",
        "sizeRangeCode": "M97: 3: XS/S, M, L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S, M, L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 3: XS/S, M, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "70b02427-cc3b-4cd9-a5d2-83e9c14da837",
        "sizeRangeCode": "M97: 3: XS/S, M/L, XL/XXL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S, M/L, XL/XXL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: XS/S, M/L, XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "9f9beaab-ec5b-4654-8012-4213a8d46551",
        "sizeRangeCode": "M97: 3: XS/S,M/L,XL/XXL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S,M/L,XL/XXL",
        "sizeList": [
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7faea8d2-ed1f-405d-aa1d-42f27081949b"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: XS/S,M/L,XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f5e8f30d-2b08-400f-a4fa-2145fa2e84c2",
        "sizeRangeCode": "M97: 3: XS/S,S/M,M/L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS/S,S/M,M/L",
        "sizeList": [
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: XS/S,S/M,M/L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "82ab1b24-e841-4e0d-a8db-ae625d392e69",
        "sizeRangeCode": "M97: 3: XXS/XS, M/L, L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS/XS, M/L, L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 3: XXS/XS, M/L, L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "14815c99-0361-4506-8984-3d18d46be7ae",
        "sizeRangeCode": "M97: 3: XXS/XS,M/L,L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS/XS,M/L,L/XL",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            }
        ],
        "displayValue": "M97: 3: XXS/XS,M/L,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "0cb57af6-96d3-4020-b6fb-9eaf1f214ba3",
        "sizeRangeCode": "M97: 3: XXS/XS,S/M,L/XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS/XS,S/M,L/XL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 3: XXS/XS,S/M,L/XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e3ad2233-1f11-4e59-a704-d509330846e5",
        "sizeRangeCode": "M97: 4: FA22 GS NA ACC Dog Custom Size Profile Request",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "FA22 GS NA ACC Dog Custom Size Profile Request",
        "sizeList": [
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7b724978-27be-47d7-921c-b107339488df"
            },
            {
                "id": "7faea8d2-ed1f-405d-aa1d-42f27081949b"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 4: FA22 GS NA ACC Dog Custom Size Profile Request",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "c75d432b-d7c5-4975-a4df-abc6082e222c",
        "sizeRangeCode": "M97: 4: S, M/L, XXS/XS, XL/XXL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S, M/L, XXS/XS, XL/XXL",
        "sizeList": [
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "7faea8d2-ed1f-405d-aa1d-42f27081949b"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 4: S, M/L, XXS/XS, XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "85383817-559e-4c21-a442-476aa61ed24a",
        "sizeRangeCode": "M97: 4: S,M,L,XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S,M,L,XL",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            },
            {
                "id": "ffc24a5c-8263-4b69-9fc6-359b58a5b025"
            }
        ],
        "displayValue": "M97: 4: S,M,L,XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e1e9aa00-0038-4967-b67f-9c46f2261328",
        "sizeRangeCode": "M97: 4: S,M/L,XXS/XS,XL/XXL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "S,M/L,XXS/XS,XL/XXL",
        "sizeList": [
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "7faea8d2-ed1f-405d-aa1d-42f27081949b"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 4: S,M/L,XXS/XS,XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "8be641f5-6db5-4cb6-989e-12eb67ed73c7",
        "sizeRangeCode": "M97: 4: XS,S,M,L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS,S,M,L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 4: XS,S,M,L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "1172f1d0-83c5-4d9f-b32b-5c62ed952743",
        "sizeRangeCode": "M97: 4: XS,S,M,XXS",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS,S,M,XXS",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "4339f730-f89a-42dd-983e-06b278731068"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 4: XS,S,M,XXS",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "e834b239-d77a-4ea1-891a-cff7b91dfd40",
        "sizeRangeCode": "M97: 4: XS-L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS-L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 4: XS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "27751484-e187-451d-8773-d0a787ea943c",
        "sizeRangeCode": "M97: 4: XXS-M",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS-M",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "4339f730-f89a-42dd-983e-06b278731068"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 4: XXS-M",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "5a7cfd65-3106-420d-a6e3-cbfa50448ba0",
        "sizeRangeCode": "M97: 5: XS,S,M,L,XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS,S,M,L,XL",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 5: XS,S,M,L,XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f8b65c1d-d733-49fa-bf0c-2841aa8ce299",
        "sizeRangeCode": "M97: 5: XS-XL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XS-XL",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            },
            {
                "id": "ffc24a5c-8263-4b69-9fc6-359b58a5b025"
            }
        ],
        "displayValue": "M97: 5: XS-XL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "cbc2fe29-bc1e-44b6-b4c1-0d29d6ce84a3",
        "sizeRangeCode": "M97: 5: XXS,XS,S,M,L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS,XS,S,M,L",
        "sizeList": [
            {
                "id": "08db825c-78ec-4501-819e-8d8dd641fa50"
            },
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "4339f730-f89a-42dd-983e-06b278731068"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "8da13a77-4dcc-432a-a70d-3c0c6f7aafae"
            }
        ],
        "displayValue": "M97: 5: XXS,XS,S,M,L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "ccb771dd-7b2f-4c86-b4bf-d2768b00f1d0",
        "sizeRangeCode": "M97: 5: XXS-L",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS-L",
        "sizeList": [
            {
                "id": "129910c7-aa86-4425-bb81-86d113b9f670"
            },
            {
                "id": "4339f730-f89a-42dd-983e-06b278731068"
            },
            {
                "id": "474a1b94-b843-465a-bd7c-67e357d64c44"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            }
        ],
        "displayValue": "M97: 5: XXS-L",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "f291ebf7-8cd1-4471-a43b-b598d696bef5",
        "sizeRangeCode": "M97: 6: XXS/XS-XL/XXL",
        "sizeModelId": "85b0e0ba-f894-4181-9a99-882f2a46e380",
        "description": "XXS/XS-XL/XXL",
        "sizeList": [
            {
                "id": "1ab4890b-fd28-4418-a5f0-c0d8bce33bee"
            },
            {
                "id": "59ba6cb1-117a-4944-a519-359c5dca22ef"
            },
            {
                "id": "6354a63e-a474-4193-a8a6-7ec2596602c4"
            },
            {
                "id": "7faea8d2-ed1f-405d-aa1d-42f27081949b"
            },
            {
                "id": "7fdf42f1-c890-4add-b246-030756107942"
            },
            {
                "id": "9b8761fe-4931-48e7-9384-4ddebe491f0a"
            }
        ],
        "displayValue": "M97: 6: XXS/XS-XL/XXL",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    },
    {
        "id": "755e4e16-d4d8-4212-a40d-f31ed73b2cfb",
        "sizeRangeCode": "S44: 6: XSMALL,SMALL,MEDIUM,LARGE,XLARGE,XXLARGE",
        "sizeModelId": "ff1a0ca4-5cd6-436c-aa81-68efb35d2b10",
        "description": "XSMALL,SMALL,MEDIUM,LARGE,XLARGE,XXLARGE",
        "sizeList": [
            {
                "id": "7dacd7dd-892f-412d-a430-e95ea55c950f"
            },
            {
                "id": "8c2f284a-0c68-46ec-a5e6-0750f803445c"
            },
            {
                "id": "90394e99-d1c6-4063-955c-325e17c24053"
            },
            {
                "id": "90e8a7ea-4574-4e73-a513-d34cc17ff0b7"
            },
            {
                "id": "9c1d456e-bdac-43f0-bfb5-3ce870c70920"
            },
            {
                "id": "d1eb1c54-43fa-4b6f-8e9d-88d599ef30d1"
            }
        ],
        "displayValue": "S44: 6: XSMALL,SMALL,MEDIUM,LARGE,XLARGE,XXLARGE",
        "timePhasedVersion": false,
        "override": false,
        "_links": {}
    }
]

async function postData(id) {
    // const response =[];
  try {
    // console.log("This is SizeRangeId=>", id);
    const response = await axios.post(`https://globalassortmentweb-qa.apps.cfplatform.dev.azeus.gaptech.com/assortment/marketChannelCustomerChoices/partialUpdate/39fbd068-23ad-4fc5-8b8c-5d6acba9f2f4`, {
      //key: 'value', // body data to send in the request
      //"sizing":{"sizeRange":{"id":id}}
    //   "sizing":{"sizeRange":{"id":id}}
    sizing: { sizeRange: { id: id } }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie':'SESSION=ODQ0MjBhMTEtNjI1ZC00NTQ0LWE0NjYtNzYyOTNmZmNiYWVl'
      },
    });
    //console.log("This is API", response);
   // console.log("This is my Resposne =>",response); // access the response data
   const jsonString = CircularJSON.stringify(response);
   writeDataIntoAFile(jsonString,'success.json')

   if(response.data.resource.sizing.sizeProfile.isCustom == true) {
    console.log("This is isCustom true" + id);
   canKill= true;
   }
   
  } catch (error) {
    const jsonString = CircularJSON.stringify(error);
    //console.error('Error:', error);
    writeDataIntoAFile(jsonString,'failure.json')
  }
}

// Call the postData function
//postData();


// Call the fetchAPI function


// apiCalls.forEach(i=> {
//     postData(i._id)
// });

for(let i=0;i<apiCalls.length;i++) {

    if(canKill) {
        console.log("Exited upon success isCustom");
        break;
    }
    // console.log("This is SizeRangeId=>", );
   postData(apiCalls[i].id);
//    console.log("Size is => " + apiCalls.length);
}
//postApi();


function writeDataIntoAFile(data,fileName) {
    

//const data = 'This is the content to be written into the file.';

fs.writeFile(fileName, data, (err) => {
  if (err) {
    //console.error('Error writing file:', err);
  } else {
    //console.log('File write successful!');
  }
});
}