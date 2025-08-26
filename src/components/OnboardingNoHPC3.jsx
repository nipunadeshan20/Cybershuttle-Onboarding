import React, { useState } from "react";
import "../css/OnboardingNoHPC3.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function OnboardingNoHPC3({ setRequestSent }) {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [isRequesting, setIsRequesting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const clusters = [
    { name: "expanse-gpu", cpu: "96", mem: "192", gpu: "A100 GPUs" },
    { name: "expanse-cpu", cpu: "128", mem: "256", gpu: "No" },
    { name: "expanse-gpu", cpu: "96", mem: "192", gpu: "A100 GPUs" },
    { name: "expanse-cpu", cpu: "128", mem: "256", gpu: "No" },
    { name: "expanse-cpu", cpu: "128", mem: "256", gpu: "No" },
    { name: "expanse-gpu", cpu: "96", mem: "192", gpu: "A100 GPUs" },
    { name: "expanse-cpu", cpu: "128", mem: "256", gpu: "No" },
  ];

  const handleRowToggle = (index) => {
    if (isSent) return; 
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(index)) {
      newSelectedRows.delete(index);
    } else {
      newSelectedRows.add(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleRequest = () => {
    if (selectedRows.size === 0 || isRequesting || isSent) return;

    setIsRequesting(true);
    setTimeout(() => {
      setIsRequesting(false);
      setIsSent(true);
      setRequestSent(true);
    }, 2000);
  };

  return (
    <div className="onboarding2-wrapper">
      <h2 className="onboarding4-title4 HeadingGettingStarted">
        Choose the HPC clusters you'd like to request access to.
      </h2>

      <div
        className={`product-table-wrapper ${isSent ? "table-disabled" : ""}`}
        style={{
          pointerEvents: isSent ? "none" : "auto",
          opacity: isSent ? 0.4 : 1,
        }}
      >
        <div className="table-scroll-container">
        <Table >
          <TableHead>
            <TableRow>
              <TableHeadCell className="product-name FirstRow">
                Name
              </TableHeadCell>
              <TableHeadCell className="product-name">Max CPUs</TableHeadCell>
              <TableHeadCell className="product-name">Memory</TableHeadCell>
              <TableHeadCell className="product-name">
                GPU Support
              </TableHeadCell>
              <TableHeadCell className="product-name"></TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {clusters.map((cluster, index) => (
              <TableRow
                key={index}
                className={`product-table-row ${
                  selectedRows.has(index) ? "bg-gray-100" : ""
                }`}
                onClick={() => handleRowToggle(index)}
              >
                <TableCell className="product-name FirstRow">
                  {cluster.name}
                </TableCell>
                <TableCell className="product-name">{cluster.cpu}</TableCell>
                <TableCell className="product-name">{cluster.mem}</TableCell>
                <TableCell className="product-name">{cluster.gpu}</TableCell>
                <TableCell className="product-name">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(index)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleRowToggle(index);
                    }}
                    disabled={isSent}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>

      <div className="RequestAccessSection">
        <div className="cluster-footer">
          <p className="cluster-footer-text">
            Request access to proceed with your selected HPC clusters.
          </p>
          <button
            className="RequestButton cluster-request-btn"
            disabled={selectedRows.size === 0 || isRequesting || isSent}
            onClick={handleRequest}
          >
            {isRequesting ? (
              <>
                <span className="loading-spinner" />
              </>
            ) : isSent ? (
              "Sent"
            ) : (
              "Request"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
